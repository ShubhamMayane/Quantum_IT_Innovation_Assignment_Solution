import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';



@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css'
})
export class SignuppageComponent {
  signUpForm:FormGroup;
  InsertUserApiUrl="http://localhost:5000/insertUser";

  constructor(public hobj:HttpClient,public router:Router)
  {
    this.signUpForm=new FormGroup({

      "fullname":new FormControl(null,Validators.required),
      "dob":new FormControl(null,Validators.required),
      "emailid":new FormControl(null,Validators.required),
      "password":new FormControl(null,Validators.required),
      "role":new FormControl("",Validators.required),

    })
}


  submitForm()
  {
    console.log(this.signUpForm);
    let fullName=this.signUpForm.value.fullname;
    let dob=this.signUpForm.value.dob;
    let email=this.signUpForm.value.emailid;
    let password=this.signUpForm.value.password;
    let role=this.signUpForm.value.role;

    console.log(fullName);
    console.log(dob);
    console.log(email);
    console.log(password);
    console.log(role);

    let user={
      fullname:fullName,
      dob:dob,
      emailid:email,
      password:password,
      role:role

    }
  

    //to check form is valid or not
    console.log(this.signUpForm.valid);
    if(this.signUpForm.valid==true)
    { 
      //form is valid
      
      
      this.hobj.post(this.InsertUserApiUrl,user).subscribe((resultData: any) => {

        
        console.log(resultData);

        if(resultData.status==true)
        {
          alert("User is inserted successfully");
          this.router.navigateByUrl("/loginform")

        }
        else
        {
          alert("Error while inserting User");  
        }
        
      });
   

    }
    else
    {
      alert("Please fill all form properly")
    }
    


  }


  goToLoginForm(){

    this.router.navigateByUrl("/loginform")

  }
}
