import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service/profile.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  profile: any;
  repos:any;
  username: string;

 constructor(private profileservice: ProfileService) {
//    this.profileservice.updateProfile(this.username);
//    this.profileservice.getProfileInfo().subscribe(profile => {
//      console.log(profile);
//      this.profile = profile;
//    });

//    this.profileservice.getRepos().subscribe(repos=>{
//      console.log(repos);
//      this.repos = repos;
//    });
//  }
//    findProfile(){
//      this.profileservice.updateProfile(this.username);
//      this.profileservice.getProfileInfo().subscribe(profile => {
//        console.log(profile);
//        this.profile = profile;
//      });

//      this.profileservice.getRepos().subscribe(repos=>{
//        console.log(repos);
//        this.repos = repos;
//      });
   }

   ngOnInit() {
     this.profileservice.updateProfile('muli3203');
     this.profileservice.getProfileInfo().subscribe(profile=>this.profile = profile);
     this.profileservice.getRepos().subscribe(repos=>this.repos = repos);
   }

}
