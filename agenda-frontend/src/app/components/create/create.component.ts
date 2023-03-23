import { Component } from '@angular/core';

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

  onSubmit() {
    console.log(this.title, this.description, this.start, this.end);
  }
}
