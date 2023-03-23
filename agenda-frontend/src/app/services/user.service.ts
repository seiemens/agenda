import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../models/userRegister.model';

import { Observable } from 'rxjs';
import { UserLogin } from '../models/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  private baseurl = 'http://localhost:3000/api/';

  registerUser(userSignUp: UserRegister): Observable<any> {
    const url = this.baseurl + 'register';
    console.log(url)
    return this.http.post<UserRegister>(url, userSignUp);
  }
  
  loginUser(userLogin: UserLogin): Observable<any> {
    const url = this.baseurl + 'login';
    console.log(url)
    return this.http.post<UserLogin>(url, userLogin);
  }
}
