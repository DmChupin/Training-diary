import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { TrainingsListModule } from './modules/trainings-list/trainings-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HeaderModule, BrowserAnimationsModule, TrainingsListModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

