import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularpipe';
  name: string = '';
  date: string = '';

  OnNameChange = (event: { target: { value: string } }) => {
    console.log('event', event.target.value);
    this.name = event.target.value;
  };
  OnDateChange = (event: { target: { value: string } }) => {
    console.log(event.target.value);
    this.date = event.target.value;
  };
}
