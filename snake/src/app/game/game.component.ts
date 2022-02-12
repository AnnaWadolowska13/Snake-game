import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { User } from '../log-form/log-form.component'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() public user!: User;
  @Output() public formLogOut = new EventEmitter<User>();
  @ViewChild(NgxSnakeComponent)
  public _snake!: NgxSnakeComponent;
  public score: number = 0;
  public timer: number = 0;
  public timerInterval!: any;
  public gameStatus: string = 'ready';
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  public onUpButtonPress() {
    this._snake.actionUp();
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
  switch (event.keyCode) {
    case 37:
      this.onLeftButtonPressed();
      break;
    case 38:
      this.onUpButtonPressed();
      break;
    case 39:
      this.onRightButtonPressed();
      break;
    case 40:
      this.onDownButtonPressed();
      break;
    }
  }

  public foodEaten() {
    this.score++;
    // console.log(this.score)
  }
  public onStartButtonPressed() {
    if (this.gameStatus !== "paused") {
      this.resetCounters();
    }
    this.gameStatus = "started";
    this.timerInterval = setInterval(() => {
      this.timer++;
    }, 1000);
    this._snake.actionStart();
  }
  public onStopButtonPressed() {
    clearInterval(this.timerInterval);
    this.gameStatus = "paused";
    this._snake.actionStop();
  }
  public onResetButtonPressed() {
    clearInterval(this.timerInterval);
    this.gameStatus = "ready";
    this.resetCounters();
    this._snake.actionReset();
  }
  public onLeftButtonPressed() {
    this._snake.actionLeft();
  }
  public onUpButtonPressed() {
    this._snake.actionUp();
  }
  public onRightButtonPressed() {
    this._snake.actionRight();
  }
  public onDownButtonPressed() {
    this._snake.actionDown();
  }
  private resetCounters() {
    this.score = 0;
    this.timer = 0;
  }
  public onClickLogOut() {
    this.formLogOut.emit();
  }
  public gameOver() {
    clearInterval(this.timerInterval);
    this.gameStatus = "end";
  }
}
