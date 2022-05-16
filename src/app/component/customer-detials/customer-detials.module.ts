import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetialsComponent } from './customer-detials.component';

const routes: Routes = [{
  path: '',
  component: CustomerDetialsComponent
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerDetialsModule { }



