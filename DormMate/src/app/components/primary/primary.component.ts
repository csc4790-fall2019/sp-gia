import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  public email = "";
  public password = "";

  constructor() {}

  ngOnInit() {
  }

  loginUser() {
   	// body...
    //console.log(event);
   	if((this.email=="iosuagwu@villanova.edu") && (this.password == "william")){
   		console.log("Welcome!");
   	} else{
   		console.log("Incorrect Email or Password! Try Again");
   	}
   }

}
