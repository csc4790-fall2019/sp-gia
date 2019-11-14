import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from '../../userdata.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  public email = "";
  public password = "";
  public user: any = [];

  constructor(private userdataService: UserdataService) {}

  ngOnInit() {
  }

  getData(){
    this.userdataService.getData().subscribe(data => {
      for (const d of data as any) {
        this.user.push({email: d.EMail, password: d.Password});
      }
      console.log(this.user);
    });
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
