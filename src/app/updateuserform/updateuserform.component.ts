import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-updateuserform',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './updateuserform.component.html',
  styleUrl: './updateuserform.component.css'
})
export class UpdateuserformComponent {


  updateUserForm:FormGroup;
  updateUserApiUrl="http://localhost:5000/updateUser";
  getUserByIdUrl="http://localhost:5000/getUserById";
  id:any;


  constructor(public hobj:HttpClient,public router:Router,public route:ActivatedRoute)
  {
    
    //creating a form object
    this.updateUserForm=new FormGroup({

      "fullname":new FormControl(null,Validators.required),
      "dob":new FormControl(null,Validators.required),
      "emailid":new FormControl(null,Validators.required),
      "password":new FormControl(null,Validators.required),
      "status":new FormControl(null,Validators.required),
      "role":new FormControl("",Validators.required),

    });

    //accessing a query params
    
    console.log(this.route.snapshot.queryParams);
    this.id=this.route.snapshot.queryParams['_id'];
    console.log(this.id);
    

    this.hobj.get(this.getUserByIdUrl+"/"+this.id).subscribe((resultData: any) => {
      
      console.log(resultData);
      let userData=resultData[0];
      console.log(userData);
      

      //setting the form data
      this.updateUserForm.controls['fullname'].setValue(userData.name);
      this.updateUserForm.controls['dob'].setValue(userData.dateOfBirth);
      this.updateUserForm.controls['emailid'].setValue(userData.userName);
      this.updateUserForm.controls['password'].setValue(userData.password);
      this.updateUserForm.controls['role'].setValue(userData.role);
      this.updateUserForm.controls['status'].setValue(userData.status);
      

    
  });

    


}


  submitForm()
  {
    console.log(this.updateUserForm);
    let fullName=this.updateUserForm.value.fullname;
    let dob=this.updateUserForm.value.dob;
    let email=this.updateUserForm.value.emailid;
    let password=this.updateUserForm.value.password;
    let role=this.updateUserForm.value.role;
    let status=this.updateUserForm.value.status;

    console.log(fullName);
    console.log(dob);
    console.log(email);
    console.log(password);
    console.log(role);
    console.log(status);

    let user={
      fullname:fullName,
      dob:dob,
      emailid:email,
      password:password,
      status:status,
      role:role

    }

    console.log(user);
    
  

    //to check form is valid or not
    console.log(this.updateUserForm.valid);
    if(this.updateUserForm.valid==true)
    { 
      //form is valid
      
      
      this.hobj.put(this.updateUserApiUrl+"/"+this.id,user).subscribe((resultData: any) => {

        
        console.log(resultData);

        if(resultData.status==true)
        {
          alert("User is updated successfully");
          this.router.navigateByUrl("/usertable")

        }
        else
        {
          alert("Error while updating User");  
        }
        
      });
   

    }
    else
    {
      alert("Please fill all form properly")
    }
    


  }




}
