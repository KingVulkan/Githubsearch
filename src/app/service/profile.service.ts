import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '527e2f382fdeb8f355039a8cda9fdf7b751aa233';
  private clientsecret = '527e2f382fdeb8f355039a8cda9fdf7b751aa233';

  constructor(private http: Http) {
    console.log('service is now ready!');
    this.username = 'KingVulkan';
  }

  getProfileInfo() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}

