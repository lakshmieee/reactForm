import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  User= new FormGroup({
    userId:new FormControl()
  })

  constructor(private searchUser:UserService){}
  public get!: any[];
  ngOnInit(): void {
    this.searchUser.getUsers().subscribe((res)=>{
      this.get =res;
      console.log(res);
    })
  }

  grab(){
    let searchUsrId=this.User['controls']['userId'].value;
    console.log(searchUsrId);
    this.searchUser.getUserById(searchUsrId).subscribe((res)=>{
this.get=res;
console.log(res);
    })
  }

}
