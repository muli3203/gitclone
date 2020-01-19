import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private username: string;
  private clientid: '30f91d541ea202a62d16';
  private clientsecret: '9d274c14ac6b530c569d956aa5cf975a4a407bde';


  constructor(private http: HttpClient) {
    console.log("service is ready");
    this.username = 'muli3203'
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&clientsecret-" + this.clientsecret);
  }

}

