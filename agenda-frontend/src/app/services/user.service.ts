import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  private baseurl = 'http://localhost:3000/api/';

  registerUser(userSignUp: User): Observable<any> {
    const url = this.baseurl + 'register';
    console.log(url)
    return this.http.post<User>(url, userSignUp);
  }
}
