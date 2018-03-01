import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { User } from '@app/model/user';
import { environment } from '@env/environment';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

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

    return this.http.post(`${this.apiUrl}/register`, user, {
      responseType: 'text',
    }).toPromise();

  }



  create(user: User){
    return this.http.post(`${this.apiUrl}/users`,user);
  }

}
