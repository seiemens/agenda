import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient) { }

  onSubmit() {
    const formData = {
      email: this.email,
      password: this.password
    };

    this.http.post("http://localhost:3000/" + 'api/login', formData).subscribe((response) => {
      console.log('API response:', response);
      // TODO: handle successful response from the backend
    }, (error) => {
      console.error('API error:', error);
      // TODO: handle error response from the backend
    });
  }
}