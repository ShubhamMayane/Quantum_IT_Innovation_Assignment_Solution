import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
  
})
export class LoginpageComponent {

  loginForm:FormGroup;
  checkUserApiUrl="http://localhost:5000/checkUser";

  constructor(public router:Router,public hObj:HttpClient)
  {
    this.loginForm=new FormGroup({

      "username":new FormControl(null,Validators.required),
      "password":new FormControl(null,Validators.required),

    })




  }


  submitForm()
  {
    console.log(this.loginForm);
    let userName=this.loginForm.value.username;
    let password=this.loginForm.value.password;

    console.log(userName);
    console.log(password);

    let loginInfo={

      username:userName,
      password:password
    }


    //to check form is valid or not
    console.log(this.loginForm.valid);
    if(this.loginForm.valid==true)
    { 
      //form is valid
      //checking user is valid or not
      this.hObj.post(this.checkUserApiUrl,loginInfo).subscribe((resultData: any) => {

        
        console.log(resultData);

        if(resultData.status==true)
        { 
          console.log("user is valid");
          
          this.router.navigateByUrl("/usertable")
        }
        else
        {
          alert("This is not a valid user");  
        }
        
      });


    }
    else
    {
      alert("Please fill all form properly")
    }
    


  }


  goToSignUp(){

    this.router.navigateByUrl("/signupform")
  }

}
