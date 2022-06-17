import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { signupModal } from './signup.modal';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserForm!: FormGroup;
  signupObj: signupModal = new signupModal();


  ngOnInit(): void {
    this.registerUserForm = this.formbuilder.group({
			Name: [''],
			Contact: [''],
			Email: [''],
			Password: [''],
		});
  }

  constructor(private formbuilder: FormBuilder,
		private http: HttpClient,private router: Router,private api: CustomerService) {


  }
  registerUser() {
		this.signupObj.name = this.registerUserForm.value.Name;
		this.signupObj.email = this.registerUserForm.value.Email;
    this.signupObj.contact = this.registerUserForm.value.Contact;
    this.signupObj.password = this.registerUserForm.value.Password;

		this.api.SignupList(this.signupObj).subscribe(
			(res) => {
				console.log(res);
				this.registerUserForm.reset();
        this.router.navigate(['login'])
			},
			(err) => {
				alert('something went wrong');
			}
		);
	}
  // registerUser(){
  //   this.http.post<any>("http://localhost:3000/profile", this.registerUserForm.value).subscribe(res=>{
  //     alert("signup successful");
  //     this.registerUserForm.reset();
  //     this.router.navigate(['login'])
  //   }, err=>{
  //     alert("Someting went wrong");
  //   })
    
  // }

}
