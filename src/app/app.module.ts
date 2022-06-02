import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CustomersComponent } from './component/customers/customers.component';
import { PerformanceComponent } from './component/performance/performance.component';
import { IssuesComponent } from './component/issues/issues.component';
import { StatsComponent } from './component/stats/stats.component';
import { AboutComponent } from './component/about/about.component';
import { TermsComponent } from './component/terms/terms.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { CustomerDetialsComponent } from './component/customer-detials/customer-detials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeComponent } from './component/employee/employee.component'



const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./component/home/home.module').then((m) => m.HomeModule)
	},
	{
		path: 'home',
		loadChildren: () => import('./component/home/home.module').then((m) => m.HomeModule)
	},
	{
		path: 'customers',
		loadChildren: () => import('./component/customers/customers.module').then((m) => m.CustomersModule)
	},
	{
		path:'employee',
		loadChildren:() => import('./component/employee/employee.module').then((m) => m.EmployeeModule)
	},
	{
		path: 'customers/:id',
		loadChildren: () => import('./component/customer-detials/customer-detials.module').then((m) => m.CustomerDetialsModule)
	},
	{
		path: 'performance',
		loadChildren: () => import('./component/performance/performance.module').then((m) => m.PerformanceModule)
	},
	{
		path: 'issues',
		loadChildren: () => import('./component/issues/issues.module').then((m) => m.IssuesModule)
	},
	{
		path: 'stats',
		loadChildren: () => import('./component/stats/stats.module').then((m) => m.StatsModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./component/about/about.module').then((m) => m.AboutModule)
	},
	{
		path: 'terms',
		loadChildren: () => import('./component/terms/terms.module').then((m) => m.TermsModule)
	},
	{
		path: '**',
		loadChildren: () => import('./component/error/error.module').then((m) => m.ErrorModule)
	}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		FooterComponent,
		CustomersComponent,
		PerformanceComponent,
		IssuesComponent,
		StatsComponent,
		AboutComponent,
		TermsComponent,
		ErrorComponent,
		CustomerDetialsComponent,
  EmployeeComponent,

	],
	imports: [
		MatButtonModule,
		BrowserModule,
		HttpClientModule,
		FormsModule,
		NgxQRCodeModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes),
	],

	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }


