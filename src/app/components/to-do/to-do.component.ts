import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  listNameCount:any = [];
  listName: any = [];
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar)
    { }

  ngOnInit(): void {
    this.listName = JSON.parse(localStorage.getItem('to-do-list')  || '[]');
    if(!this.listName.includes("Today")){
      this.listName.push("Today");
      localStorage.setItem('to-do-list',JSON.stringify(this.listName));
    }
    for(let item of this.listName){
    let listCount = JSON.parse(localStorage.getItem(item)  || '[]');
    this.listNameCount.push(listCount.length);
    }
  }
  
  addNewToDo(){
    const dialogRef = this.dialog.open(NewToDoDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!this.listName.includes(result) && result != ''){
        this.listName.push(result);
        localStorage.setItem('to-do-list',JSON.stringify(this.listName));
        this.listNameCount = [];
        for(let item of this.listName){
          let listCount = JSON.parse(localStorage.getItem(item)  || '[]');
          this.listNameCount.push(listCount.length);
        }
      }
      else if(result != ''){
        this.snackBar.open(result + " is already added!","X");
      }
    });
  }

  goToList(item: string){
    this.router.navigateByUrl("/to-do/to-do-list/"+item)
  }

}

@Component({
  selector: 'new-to-do-dialog',
  templateUrl: 'new-to-do-dialog.component.html',
})
export class NewToDoDialog {
  listName: string = '';
  constructor(
    public dialogRef: MatDialogRef<NewToDoDialog>,
  ) {}

  createNewToDo(listName: string){
    this.dialogRef.close(listName);
  }
}


