import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SearchComponent } from './search/search.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:"Register", component:RegistrationPageComponent},
  {path:"home", component:HomePageComponent},  
  {path:"", component:HomePageComponent},  
  {path: 'login' , component:LoginPageComponent},
  {path: 'search' , component:SearchComponent},
  {path: 'Add-User' , component:AddUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
