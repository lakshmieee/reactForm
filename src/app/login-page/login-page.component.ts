import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

 loginForm= new FormGroup({
  userName: new FormControl('',Validators.required),
password: new FormControl('',Validators.required)
})

}
