import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
 {path:'',component:DashboardComponent},
 {path:'login',component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'user',component:UserComponent},
 {path:'admin',component:AdminComponent},
 {path:'**',component:NotFoundComponent}

//   each object within the array defines a route configuration, with the path property 
// specifying the URL path and the component 
// property specifying the Angular component to render when that path is matched.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
