import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserdataService } from '../../userdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  usersList: any = [];
  updateUser: FormGroup;

  public hometown= "";
  public major = "";
  public bedtime = "";
  public firstName = "";
  public lastName = ""
  public bio = "";
  public VUID = "";

  constructor(
    private actRoute: ActivatedRoute,
    private userdataService: UserdataService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('Id');
    this.userdataService.getUser(id).subscribe((data) => {
      this.updateUser = this.fb.group({
        firstName: [data.firstName],
        lastName: [data.lastName],
        Class: [data.Class],
        Hometown: [data.Hometown],
        Major: [data.Major],
        Bedtime: [data.Bedtime],
        Bio: [data.Bio],
        Gender: [data.Gender]
      })
    });
  }

  receiveMessage($event) {
    this.VUID=$event;
  }

  ngOnInit() {
    this.updateForm();
  }

  updateForm(){
    this.updateUser = this.fb.group({
      firstName: [''],
      lastName: [''],
      Class: [''],
      Hometown: [''],
      Major: [''],
      Bedtime: [''],
      Bio: [''],
      Gender: ['']
    });
  }

  submitForm(){
    var id = this.actRoute.snapshot.paramMap.get('Id');
    this.userdataService.UpdateUser(id, this.updateUser.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/profile'))
    })
  }

}
