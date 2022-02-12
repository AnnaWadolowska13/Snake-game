import { Component } from '@angular/core';
import { User } from './log-form/log-form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snake';
  public userLoggedIn: boolean = false;
  public user: User = {
    name: "",
    email: ""
  };
  public onClickLogIn(user:User):void {
    this.userLoggedIn = true;
    this.user = user;
  }
  public onClickLogOut(): void {
    this.userLoggedIn = false;
    this.user = {
      name: "",
      email: ""
    };
  }
}
