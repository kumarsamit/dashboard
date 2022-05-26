import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


const routes: Routes = [{
  path: '',
  component:  AboutComponent
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
