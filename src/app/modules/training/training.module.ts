import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { TrainingRoutingModule } from './training-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    RouterModule
  ]
})
export class TrainingModule { }
