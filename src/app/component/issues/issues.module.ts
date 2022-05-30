import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues.component';


const routes: Routes = [{
  path: '',
  component: IssuesComponent
}];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IssuesModule { }
