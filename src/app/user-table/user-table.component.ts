import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [HttpClientModule,DatePipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
 
  getAllUserDataApiUrl="http://localhost:5000/getAllUsers";
  deleteUserApiUrl="http://localhost:5000/deleteUser";
  users:any=[];

  constructor(public hObj:HttpClient,public router:Router)
  {
    
    this.hObj.get(this.getAllUserDataApiUrl).subscribe((resultData: any) => {

        
      console.log(resultData);

      this.users=resultData;
      
    });

  }


  deleteUser(id:any)
  {
    console.log(id);

    //delete user in db
    this.hObj.delete(this.deleteUserApiUrl+"/"+id).subscribe((resultData: any) => {
    console.log(resultData);


    //getting all updated data from api
      
    this.hObj.get(this.getAllUserDataApiUrl).subscribe((resultData: any) => {
        console.log(resultData);
        this.users=resultData;
      
    });
    


    });
    

  }


  updateUser(inputId:any)
  {
      console.log(inputId);

      this.router.navigate(["/updateuserform"],
        {queryParams:{_id:inputId}}
      )


      


  }


}
