import { Component } from '@angular/core';
import { Meeting } from 'src/app/models/meeting.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  title: string | undefined;
  description: string | undefined;
  start: Date | undefined;
  end: Date | undefined;
  constructor(
    private userService: UserService
  ){}

  onSubmit() {
    if(this.title != undefined && this.description != undefined && this.start != undefined && this.end != undefined){
      var meeting: Meeting = {title: this.title, description: this.description, endDate: this.end, startDate: this.start}
      this.userService.createMeeting(meeting).subscribe();
      window.location.href = '/home';
    }
    
    console.log(this.title, this.description, this.start, this.end);
  }
}
