import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurgeriesComponent } from './surgeries/surgeries.component';
import { SurgeriesRoutingModule } from './surgeries-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SurgeriesComponent
  ],
  imports: [
    CommonModule,
    SurgeriesRoutingModule,
    RouterModule
  ]
})
export class SurgeriesModule { }
