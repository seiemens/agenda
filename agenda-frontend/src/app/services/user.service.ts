import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../models/userRegister.model';

import { Observable } from 'rxjs';
import { UserLogin } from '../models/userLogin.model';
import { Meeting } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  private baseurl = 'http://localhost:3000/api/';

  registerUser(userSignUp: UserRegister): Observable<any> {
    const url = this.baseurl + 'register';
    return this.http.post<UserRegister>(url, userSignUp);
  }
  
  loginUser(userLogin: UserLogin): Observable<any> {
    const url = this.baseurl + 'login';
    return this.http.post<UserLogin>(url, userLogin);
  }

  createMeeting(meeting: Meeting): Observable<any> {
    const url = this.baseurl + 'meeting';
    return this.http.post<UserLogin>(url, meeting);
  }
}
