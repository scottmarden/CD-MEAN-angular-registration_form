import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  users: Array<any> = [];
  confirmation: string = ""
  user = new User()
 	onSubmit(){
		console.log(this.user);
		this.user.state = this.user.state.toUpperCase();
		this.confirmation = "Thank you for registering with us " + this.user.firstName + " " + this.user.lastName + "! We just sent you a confirmation email at " + this.user.email + " and we will send all mail to " + this.user.streetAddress + " " + this.user.aptNum + " " + this.user.city + ", " + this.user.state + "!";
		console.log(this.confirmation)
		this.users.push(this.user);
		console.log(this.users);
		this.user = new User();
		return this.confirmation
	}
 }
