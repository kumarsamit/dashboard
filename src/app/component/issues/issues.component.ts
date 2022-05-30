import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})

export class IssuesComponent implements OnInit {

  data:any;
  constructor( private user:CustomerService){
    this.user.getData("https://jsonplaceholder.typicode.com/todos/").subscribe(data=>{
      // console.warn(data)
      this.data = data 
    })
  }


  ngOnInit(): void {
  }

}
