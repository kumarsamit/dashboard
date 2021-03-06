import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetialsComponent } from './component/customer-detials/customer-detials.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class CustomerService {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  getData(url:any){
    // let url = "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url)
  };

  postEmploye(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=> {
      return res
    }))
  }

  getEmploye(data:any){
    return this.http.get<any>("http://localhost:3000/posts",data).pipe(map((res:any)=> {
      return res
    }))
  }

  updateEmploye(data:any , id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=> {
      return res
    }))
  }

  deleteEmploye(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=> {
      return res
    }))
  }

  postToDo(data:any){
    return this.http.post<any>("http://localhost:3000/comments",data).pipe(map((res:any) => {
      return res
    }))
  }
  getToDO(data:any){
    return this.http.get<any>("http://localhost:3000/comments",data).pipe(map((res:any) => {
      return res
    }))
  }
  deleteToDo(id:number){
    return this.http.delete<any>("http://localhost:3000/comments/"+id).pipe(map((res:any) =>{
    return res}))
  }
  updateTodo(data:any , id:number){
    return this.http.put<any>("http://localhost:3000/comments/"+id,data).pipe(map((res:any)=> {
      return res
    }))
  }
  SignupList(data:any){
    return this.http.post<any>("http://localhost:3000/profile",data).pipe(map((res:any) => {
      return res
    }))
  }

}
