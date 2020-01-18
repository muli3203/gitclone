import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileservice: ProfileService) {
    this.profileservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
    });
   }

  ngOnInit() {
  }

}
