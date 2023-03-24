import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { UserRegister } from 'src/app/models/userRegister.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: string | undefined;
  username: string | undefined;
  password: string | undefined;

  constructor(
    private userService: UserService
  ){}

  onSubmit() {
    if(this.email && this.username && this.password){
      var user: UserRegister = {username: this.username, email: this.email, password: this.password};
      this.userService.registerUser(user).subscribe();
      console.log("did req");
    }
    }
}
