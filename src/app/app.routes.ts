import { Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UpdateuserformComponent } from './updateuserform/updateuserform.component';

export const routes: Routes = [

    {path:"",component:LoginpageComponent},
    {path:"signupform",component:SignuppageComponent},
    {path:"usertable",component:UserTableComponent},
    {path:"loginform",component:LoginpageComponent},
    {path:"updateuserform",component:UpdateuserformComponent},

];
