import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userSer:UserService){}

  userForm =new FormGroup({
    name:new FormControl(),
    jobName:new FormControl(),
  })

  add(){
this.userSer.postUser(this.userForm.value).subscribe((res)=>{
  console.log(res);
})
    // console.log(this.userForm.value);
  }

}
