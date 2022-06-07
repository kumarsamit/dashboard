import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list.component';

const routes : Routes = [{
  path:'',
  component: TodoListComponent

}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListModule { }
