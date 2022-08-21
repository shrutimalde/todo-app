import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do.component';

const routes: Routes = [
  { path : '', component: ToDoComponent},
  { path: 'to-do-list/:item', component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
