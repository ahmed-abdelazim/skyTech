import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule
  ]
})
export class NewsModule { }
