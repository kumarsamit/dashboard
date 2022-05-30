import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetialsComponent } from './component/customer-detials/customer-detials.component';

@Injectable({
  providedIn: 'root'
})



export class CustomerService {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  getData(url:any){
    // let url = "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url)
  };

}
