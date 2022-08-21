import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { NewToDoDialog, ToDoComponent } from './to-do.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoComponent,
    NewToDoDialog
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ToDoModule { }
