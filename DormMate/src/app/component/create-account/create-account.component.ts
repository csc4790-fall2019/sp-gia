import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from '../../userdata.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public email = "";
  public password1= "";
  public password2= "";

  //constructor(private userdataService: UserdataService) {}

  ngOnInit() {
  }

  /*newUser(userdata){
    console.log(userdata);

    this.userdataService.registerUsers(userdata).subscribe((response) => {console.log(response)});
  }*/

  checkCredentials(){
  	if(this.password1 == this.password2){
  		console.log("Account Creation Successfull");
  	} else{
      console.log("Passwords do not match");
    }
  }

}
