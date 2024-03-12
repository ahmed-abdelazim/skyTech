import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {
  customOptions: OwlOptions;
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      navSpeed: 700,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: false
    }
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
