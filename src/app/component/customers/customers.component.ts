import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
    data: any;
    name: any;
    
    constructor(private user: CustomerService, private route: ActivatedRoute) {
        this.user.getUser().subscribe((data) => {
            this.data = data;
			// console.warn(data)
        });

    }

    ngOnInit() {}
}
