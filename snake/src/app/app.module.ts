import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { LogFormComponent } from './log-form/log-form.component';
import { NgxSnakeModule } from 'ngx-snake';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    GameComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSnakeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
