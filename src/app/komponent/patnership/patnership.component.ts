import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-patnership',
  templateUrl: './patnership.component.html',
  styleUrls: ['./patnership.component.scss']
})
export class PatnershipComponent implements OnInit {

  owl:any = 'border: 1px solid red; '

  customOptions: OwlOptions = {
    loop:true,
    center:true,
    lazyLoad:true,
    margin:10,
    stagePadding :80,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    // animateOut: 'animate__animated animate__slideOutDown',
    // animateIn: 'animate__animated animate__shakeY',
    dots:false,
    responsive:{
        0:{
          stagePadding :20,
          items:3  
        },
        390:{
          items:3
        },
        576:{
            items:4,
       
        },
        768:{
            items:4
        },
        992:{
          items:4
        },
        1200:{
          items:4
        },
        1400:{
          items:4
        }
    }
  }

  slides = [
    {id: 1, img: "../assets/image/iconPatner/Carrefour_logo.svg"},
    {id: 2, img: "../assets/image/iconPatner/lotte2-min.png"},
    {id: 3, img: "../assets/image/iconPatner/lulu-min.png"},
    {id: 4, img: "../assets/image/iconPatner/aeon-min.png"},
    // {id: 5, img: "../assets/image/iconPatner/kebunbuah-min.png"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
