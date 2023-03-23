import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { UserLogin } from 'src/app/models/userLogin.model';
import { catchError, tap } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {
  public userlogin = new UserLogin();

  constructor(
    private userService: UserService
  ){}

  public login(): void {
    if(this.userlogin.password !== '' && this.userlogin.username !== ''){

      this.userService.loginUser(this.userlogin).pipe(
        tap((res) =>{
          console.log(res)
          sessionStorage.setItem("username", res.username)
          window.location.href = '/home'
        }),
        catchError((err) =>{

          return err;
        })
      ).subscribe();

    }

    

  }
}