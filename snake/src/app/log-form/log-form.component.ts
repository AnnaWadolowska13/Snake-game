import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  @Output() public formLogIn = new EventEmitter<Object>();
  constructor() {}

  ngOnInit(): void {
  }
  public onClickLogIn(form: FormGroup): void{
    // const name = form.value.userName;
    // const email = form.value.userEmail;
    const user = {
      name: form.value.userName,
      email: form.value.userEmail
    }
    this.formLogIn.emit(user);
  }

}
