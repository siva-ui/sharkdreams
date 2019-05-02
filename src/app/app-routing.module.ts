import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserlogComponent } from './userlog/userlog.component';

const routes: Routes = [
  {path:"", component: SignupComponent},
  {path: "signup", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path:"log", component: UserlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
