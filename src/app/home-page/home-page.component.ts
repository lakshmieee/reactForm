import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private ser:UserService){};
  public value:any[]=[];
  ngOnInit(): void {
    this.ser.getValue().subscribe((result)=>{
this.value=result;
console.log(result);
    })
  }

}
