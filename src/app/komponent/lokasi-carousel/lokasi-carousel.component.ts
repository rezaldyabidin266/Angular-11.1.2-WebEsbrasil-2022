import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lokasi-carousel',
  templateUrl: './lokasi-carousel.component.html',
  styleUrls: ['./lokasi-carousel.component.scss']
})
export class LokasiCarouselComponent implements OnInit {

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
    animateOut: 'animate__animated animate__fadeOutDown',
    animateIn: 'animate__animated animate__fadeInUp',
    
    responsive:{
        0:{
          margin:10,
            items:1,
            center:false
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
    {id: 1, img: "../../../assets/image/Tersedia di/Tersedia di Gofood & Grabfood 2-01-min.jpg"},
    {id: 3, img: "../assets/image/lokasiPersatu/3.jpg"},
    {id: 7, img: "../assets/image/lokasiPersatu/7.jpg"},
    {id: 8, img: "../assets/image/lokasiPersatu/8.jpg"},
    {id: 9, img: "../assets/image/lokasiPersatu/9.jpg"},
    {id: 10, img: "../assets/image/lokasiPersatu/10.jpg"},
    {id: 11, img: "../assets/image/lokasiPersatu/11.jpg"},
    {id: 12, img: "../assets/image/lokasiPersatu/12.jpg"},
    {id: 13, img: "../assets/image/lokasiPersatu/13.jpg"},
    {id: 14, img: "../assets/image/lokasiPersatu/1.jpg"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
