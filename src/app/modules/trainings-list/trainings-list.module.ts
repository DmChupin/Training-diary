import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsListComponent } from './trainings-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrainingsCardModule } from '../trainings-card/trainings-card.module';

@NgModule({
  declarations: [TrainingsListComponent],
  imports: [CommonModule, MatGridListModule, TrainingsCardModule],
  exports: [TrainingsListComponent],
})
export class TrainingsListModule {}

