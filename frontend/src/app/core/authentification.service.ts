import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { User } from '@app/model/user';
import { environment } from '@env/environment';

@Injectable()
export class AuthenticationService {
  private token: null;
  private apiUrl: string;
  private user: User;

  constructor(private http: HttpClient,
              private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  register(user: any): Promise<any> {
    console.log('asdsad');
    return this.http.post(`${this.apiUrl}/register`, user, {
      responseType: 'text',
    }).toPromise();
  }

}
