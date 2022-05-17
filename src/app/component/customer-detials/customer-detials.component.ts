import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})



@Component({
	selector: 'app-customer-detials',
	templateUrl: './customer-detials.component.html',
	styleUrls: ['./customer-detials.component.css']
})
export class CustomerDetialsComponent implements OnInit {

	CustomerDetails: any;
	newApi: string = 'https://jsonplaceholder.typicode.com/users';
	data: any;
    name: any;

	constructor( public route: ActivatedRoute , private user: CustomerService  ) {
		var newURL = this.newApi + '/' + this.route.snapshot.params['id']
		console.log(newURL)

			this.user.getData(newURL).subscribe((data) => {
				this.data = data;
				console.warn(data)
			});
	

	}

	ngOnInit(): void {
		
	}

}

