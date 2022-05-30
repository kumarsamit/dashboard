import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance.component';
// import {MatButtonModule} from '@angular/material/button'



const routes: Routes = [{
  path: '',
  component: PerformanceComponent
}];



@NgModule({
  declarations: [],
  imports: [
    // MatButtonModule,
    CommonModule,
  RouterModule.forChild(routes)

  ]
})
export class PerformanceModule { }
