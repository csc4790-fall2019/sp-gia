import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public hometown= "";
  public major = "";
  public bedtime = "";
  public firstName = "";
  public lastName = ""
  public bio = "";
  public exampleFormControlSelect1 = "";
  public
  constructor() { }

  ngOnInit() {
  }

}
