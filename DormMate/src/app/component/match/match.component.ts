import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserdataService } from '../../userdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  usersList: any = [];
  num: number = 2;
  match: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private userdataService: UserdataService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    this.rollMatches();
  }

  rollMatches() {
    this.userdataService.getUser(this.num).subscribe((data) => {
      this.usersList = data;
    });
    if(this.num==16){
      this.ngZone.run(() => this.router.navigateByUrl('/messages'))
    }
    this.num++;
    if((this.num ==4) || (this.num == 5) || (this.num == 16)){
      this.match = true;
    }
    else{
      this.match = false;
    }
  }

}
