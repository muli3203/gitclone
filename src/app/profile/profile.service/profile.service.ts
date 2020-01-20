import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  username: string;
  clientid: string;
  clientsecret: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'token 4c76ad7544325a9093b754f55d858b1dd06ca2b5' })
  };


  constructor(public http: HttpClient) {
    console.log("service is ready");
    this.username = 'muli3203'
    // this.clientid = '30f91d541ea202a62d16'
    // this.clientsecret = "33c3a478a493fde5bdc4c44a3fcc5326f0b22202"

  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username, this.httpOptions);
  }
  getRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos", this.httpOptions);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

