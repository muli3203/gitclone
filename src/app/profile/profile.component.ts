import { ProfileService } from './profile.service/profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   profile: any;
   repos:any;
   username: string;

  constructor(private profileservice: ProfileService) {
    this.profileservice.updateProfile(this.username);
    this.profileservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileservice.getRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    });
  }
    findProfile(){
      this.profileservice.updateProfile(this.username);
      this.profileservice.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });

      this.profileservice.getRepos().subscribe(repos=>{
        console.log(repos);
        this.repos = repos;
      });
    }

  ngOnInit() {
    this.profileservice.updateProfile('muli3203');
    this.profileservice.getProfileInfo().subscribe(profile=>this.profile = profile);
    this.profileservice.getRepos().subscribe(repos=>this.repos = repos);
  }

}
