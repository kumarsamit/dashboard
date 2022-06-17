import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserForm!: FormGroup;

  ngOnInit(): void { 
    this.loginUserForm = this.formbuilder.group({
      Email:[''],
      Password:['']
    })
  }

  constructor(private formbuilder: FormBuilder,
		private http: HttpClient,private router: Router) {
  }
  // login(){
    // this.http.get<any>("http://localhost:3000/profile").subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.Email === this.loginUserForm.value.Email && a.Password === this.loginUserForm.value.Password
  //     });
  //     if(user){
  //       alert("login success");
  //       this.loginUserForm.reset();
  //       this.router.navigate(['home'])
  //     }else{
  //       alert("user not found");
  //     }

  //   }, err=>{
  //     alert('something went wrong')
  //   })
  // }
// }

login(){

		this.http.get<any>('http://localhost:3000/profile').subscribe((res) => {
        let password = this.loginUserForm.value.Password;
        let email = this.loginUserForm.value.Email;
        for(let i=0; i<res.length;i++){
          if(res[i].email === email && res[i].password === password){
            alert("login successful")
            break
          }
        }
		},
    err=>{
      alert("someting went wrong")
    })

}
}