import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public email = "";
  public password1= "";
  public password2= "";
  constructor() { }

  ngOnInit() {
  }

  checkCredentials(){
  	if(this.password1 == this.password2){
  		console.log("Account Creation Successfull");
  	} else{
      console.log("Passwords do not match");
    }
  }

}
