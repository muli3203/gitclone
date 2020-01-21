import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  username: string;
  auth_token: string = "4c76ad7544325a9093b754f55d858b1dd06ca2b5";


  constructor(public http: HttpClient) {
    console.log("service is ready");
    this.username = 'muli3203'
    // this.clientid = '30f91d541ea202a62d16'
    // this.clientsecret = "33c3a478a493fde5bdc4c44a3fcc5326f0b22202"

  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.auth_token);
  }
  getRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.auth_token);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

