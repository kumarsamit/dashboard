import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats.component';
import { FormsModule } from '@angular/forms';




const routes: Routes = [{
  path: '',
  component: StatsComponent
}];


@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class StatsModule { }
