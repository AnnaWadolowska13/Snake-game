import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snake';
  public userLoggedIn: boolean = false;
  public user: Object;
  public onClickLogIn(user:Object) {
    this.userLoggedIn = true;
    this.user = user;

  }
}
