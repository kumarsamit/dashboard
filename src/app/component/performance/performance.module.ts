import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance.component';


const routes: Routes = [{
  path: '',
  component: PerformanceComponent
}];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  RouterModule.forChild(routes)

  ]
})
export class PerformanceModule { }
