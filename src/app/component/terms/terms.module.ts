import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { TermsComponent } from './terms.component';

const routes : Routes = [{
  path:'',
  component: TermsComponent
}];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TermsModule { }
