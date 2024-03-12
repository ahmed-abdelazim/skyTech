import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    WorkshopComponent
  ],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    RouterModule,
    CarouselModule,
  ]
})
export class WorkshopsModule { }
