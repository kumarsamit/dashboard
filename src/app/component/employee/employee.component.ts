import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { CustomerService } from 'src/app/customer.service';
import { EmployeeModal } from './employee.modal';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  formvalue !: FormGroup;
  employeeModalObj: EmployeeModal = new EmployeeModal();
  employeeData!:any;
  showAdd!:boolean;
  showEdit!:boolean;


  constructor(private formbuilder: FormBuilder, private api :CustomerService) { }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      name:[''],
      email:[''],
      contact:[''],
      salary:['']
    })
    this.getAllEmployee()
  }
  clickAdd(){
    this.formvalue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }
  postEmployeeDetails(){
    this.employeeModalObj.name = this.formvalue.value.name;
    this.employeeModalObj.contact = this.formvalue.value.contact;
    this.employeeModalObj.email = this.formvalue.value.email;
    this.employeeModalObj.salary = this.formvalue.value.salary;

    this.api.postEmploye(this.employeeModalObj)
    .subscribe(res =>{
      console.log(res);
      alert("Employee  added succesfully");
      this.getAllEmployee();
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formvalue.reset();
    },
    err=>{
      alert("something went wrong")
    })
  }

  getAllEmployee(){
    this.api.getEmploye("http://localhost:3000/posts").subscribe(res =>{
      this.employeeData = res;
    })
  }
  
  deleteEmploye(row:any){
    this.api.deleteEmploye(row.id).subscribe(res => {
      alert("Employee deleted");
      this.getAllEmployee();
    })
  }
  onEdit(row:any){
    this.showAdd = false;
    this.showEdit = true;
    this.employeeModalObj.id = row.id;
    this.formvalue.controls['name'].setValue(row.name);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['contact'].setValue(row.contact);
    this.formvalue.controls['salary'].setValue(row.salary);

  }

  updateEmployeDetails(){
    this.employeeModalObj.name = this.formvalue.value.name;
    this.employeeModalObj.contact = this.formvalue.value.contact;
    this.employeeModalObj.email = this.formvalue.value.email;
    this.employeeModalObj.salary = this.formvalue.value.salary;


  this.api.updateEmploye(this.employeeModalObj, this.employeeModalObj.id)
  .subscribe(res =>{
    alert("Updated");
    let ref = document.getElementById("cancel");
      ref?.click();
      this.formvalue.reset();
      this.getAllEmployee();

  })
  
  }

}

