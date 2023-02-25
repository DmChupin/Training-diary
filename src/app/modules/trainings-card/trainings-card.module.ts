import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsCardComponent } from './trainings-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TrainingsCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [TrainingsCardComponent],
})
export class TrainingsCardModule {}

