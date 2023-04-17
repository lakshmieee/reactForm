import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserList } from './interReg';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  
  registrationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    emailId: new FormControl('',[Validators.required,Validators.email]),
    contactNo: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    DOB: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    pincode: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    
    })

    public formList!:UserList;

    ngOnInit(): void {
    }


    onSubmit(){

      // const firstName = this.registrationForm.controls['firstname'].value;
      // const lastName = this.registrationForm.controls['lastname'].value;
      // const emailId = this.registrationForm.controls['emailId'].value;
      // const contactNo = this.registrationForm.controls['contactNo'].value;
      // const DOB = this.registrationForm.controls['DOB'].value;
      // const Address = this.registrationForm.controls['Address'].value;
      // const city = this.registrationForm.controls['city'].value;
      // const pincode = this.registrationForm.controls['pincode'].value;
      // const state = this.registrationForm.controls['state'].value;
      // const country = this.registrationForm.controls['country'].value;
      // alert(`First Name: ${firstName}, 
      //        Last Name: ${lastName}, 
      //        Email Id: ${emailId}, 
      //        Contact No:${contactNo}, 
      //        DOB: ${DOB}, 
      //        Address : ${Address}, 
      //        City : ${city}, 
      //        Pincode: ${pincode}, 
      //        State : ${state}, 
      //        Country: ${country}`);

            //  this.registrationForm.reset();
      this.formList = {
        firstName : this.registrationForm.controls['firstName'].value || "",
        lastName : this.registrationForm.controls['lastName'].value || "",
       emailId : this.registrationForm.controls['emailId'].value || "",
       contactNo: this.registrationForm.controls['contactNo'].value || "",
       address : this.registrationForm.controls['address'].value || "",
       city : this.registrationForm.controls['city'].value || "",
       pincode : this.registrationForm.controls['pincode'].value || "",
       state : this.registrationForm.controls['state'].value || "",
       country :this.registrationForm.controls['country'].value || ""
      };

console.log(this.formList);
      
    }
  
}


