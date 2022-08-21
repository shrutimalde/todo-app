import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoForm!: FormGroup;
  editValue: string = '';
  editedValue: string = '';
  listName : any;
  newItem: string = '';
  toDoList:any = [];
  completedList: any = [];
  listNameArr: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.listName = params.get('item');
    })
    this.toDoList = JSON.parse(localStorage.getItem(this.listName)  || '[]');
    if(this.toDoList == null){
      this.toDoList = [];
    }

    this.completedList = JSON.parse(localStorage.getItem(this.listName+'Completed')  || '[]');
    if(this.completedList == null){
      this.completedList = [];
    }

    this.toDoForm = this.formBuilder.group({
      todo: [false],
      editedValue: ['']
    });
  }

  addItem(item: any){
    this.toDoList.push({
      seq: this.toDoList.length,
      task: item,
      createDate: new Date()
    });
    localStorage.setItem(this.listName, JSON.stringify(this.toDoList));
    this.newItem = '';
  }

  saveEditedItem(i : number, editedValue: string){
    this.toDoList[i].task = editedValue;
    localStorage.setItem(this.listName, JSON.stringify(this.toDoList));
    this.editValue = '';
  }

  editItem(item: any){
    this.toDoForm.get('editedValue')?.setValue(item.task);
    this.editValue = item.task;
  }

  deleteItem(i: number){
    this.toDoList.splice(i,1);
    localStorage.setItem(this.listName, JSON.stringify(this.toDoList));
  }

  completeTask(i: number, item: any){
    this.completedList.push({
      seq: item.seq,
      task: item.task,
      createDate: item.createDate
    });
    localStorage.setItem(this.listName+'Completed', JSON.stringify(this.completedList));
    this.toDoList.splice(i,1);
    localStorage.setItem(this.listName, JSON.stringify(this.toDoList));
  }

  undoItem(i: number,item: any){
    this.toDoForm.get('todo')?.setValue(false);
    this.toDoList.splice(item.seq, 0, item);
    localStorage.setItem(this.listName, JSON.stringify(this.toDoList));
    this.completedList.splice(i,1);
    localStorage.setItem(this.listName+'Completed', JSON.stringify(this.completedList));
  }

  deleteList(listName: string){
    this.listNameArr = JSON.parse(localStorage.getItem('to-do-list')  || '[]');
    let index = this.listNameArr.findIndex((item: string) => item == listName);
    this.listNameArr.splice(index,1);
    localStorage.setItem('to-do-list',JSON.stringify(this.listNameArr));
    localStorage.removeItem(listName);
    localStorage.removeItem(listName+"Completed");
    this.router.navigateByUrl('/to-do');
  }

  backToToDo(){
    this.router.navigateByUrl('/to-do');
  }
}
