import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class CustomerService {
  newURLId:string="";
 
  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  getData()
  {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url)
  };

  getUser()
  {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url)
  }
  getCustomer(){
    let url = "https://jsonplaceholder.typicode.com/users" + '/' + 'newURLId'

  }




}
