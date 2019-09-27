import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  email:string;
  password:string;

  constructor() {}

  ngOnInit() {
  }

  loginUser() {
   	// body...
   	//if((this.email=="iosuagwu@villanova.edu") && (this.password == "william")){
   		console.log("Welcome!");
   	//} //else{
   	//	console.log("Incorrect Email or Password! Try Again");
   	//}
   }

}
