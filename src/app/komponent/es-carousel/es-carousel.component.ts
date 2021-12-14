import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-es-carousel',
  templateUrl: './es-carousel.component.html',
  styleUrls: ['./es-carousel.component.scss']
})
export class EsCarouselComponent implements OnInit {
  
  owl:any = 'border: 1px solid red; '

  customOptions: OwlOptions = {
    loop:true,
    center:true,
    lazyLoad:true,
    margin:30,
    stagePadding :10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    animateOut: 'animate__hinge',
    animateIn: 'animate__lightSpeedInRight',
    responsive:{
        0:{
          margin:10,
          items:1,
          center:false,

        },
        576:{
            items:2,
            center:false
        },
        768:{
            items:3
        },
        992:{
          items:3
        },
        1200:{
          items:3
        },
        1400:{
          items:3
        }
    }
  }

  slides = [
    {id: 1, img: "../assets/image/esPersatu/1-min.jpg"},
    {id: 2, img: "../assets/image/esPersatu/2-min.jpg"},
    {id: 3, img: "../assets/image/esPersatu/3-min.jpg"},
    {id: 4, img: "../assets/image/esPersatu/4-min.jpg"},
    {id: 5, img: "../assets/image/esPersatu/5-min.jpg"},
    {id: 6, img: "../assets/image/esPersatu/6-min.jpg"},
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
