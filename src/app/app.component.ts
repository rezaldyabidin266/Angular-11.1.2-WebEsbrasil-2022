import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('navbar') navbar:ElementRef | undefined;
  @ViewChild('navbarToggler') navbarToggler:ElementRef | undefined;
  @ViewChild('navbarCollapse') navbarCollapse:ElementRef | undefined;
  @ViewChild('navLink') navLink:ElementRef | undefined;
  @ViewChild('navLink2') navLink2:ElementRef | undefined;
  @ViewChild('navLink3') navLink3:ElementRef | undefined;
  @ViewChild('navLink4') navLink4:ElementRef | undefined;
  @ViewChild('navLink5') navLink5:ElementRef | undefined;
  @ViewChild('navLink6') navLink6:ElementRef | undefined;

  overflay : boolean = true;


  constructor(){

   console.log(AOS);

  }

    ngOnInit(){

    this.navbarScroll();

    AOS.init();

    window.addEventListener('load', AOS.refresh);

      if (document.readyState == 'complete') 
      {
          AOS.refresh();
      }

      this.oveflayDelay();
    }

    ngAfterViewInit() {}
    //Function Navbar Scroll
    navbarScroll(){
      var prevScrollpos = window.pageXOffset;
      window.onscroll = () => {
          var buttonToggler = this.navbarToggler?.nativeElement;
          var navChangeBg = this.navbar?.nativeElement;
          var navLink = this.navLink?.nativeElement;
          var navPadding = this.navbarCollapse?.nativeElement;
          var navLink2 = this.navLink2?.nativeElement;
          var navLink3 = this.navLink3?.nativeElement;
          var navLink4 = this.navLink4?.nativeElement;
          var navLink5 = this.navLink5?.nativeElement;
          var navLink6 = this.navLink6?.nativeElement;
          var currentScrollPos = window.pageYOffset;


          if (prevScrollpos > currentScrollPos) {

            var navBot = this.navbar?.nativeElement;
            navBot.style.top = "0";
          } else {
            var navTop = this.navbar?.nativeElement;
            navTop.style.top = "-100px";
          }
          prevScrollpos = currentScrollPos;

          if(window.scrollY > 150 ){
            navPadding.classList.add('scrolled');
          }
          else{
            navPadding.classList.remove('scrolled')
          }

          if(window.scrollY > 600 ){
            buttonToggler.classList.add('scrolled');
            navLink.classList.add('scrolled');
            navLink2.classList.add('scrolled');
            navLink3.classList.add('scrolled');
            navLink4.classList.add('scrolled');
            navLink5.classList.add('scrolled');
            navLink6.classList.add('scrolled');
            navChangeBg.classList.add('scrolled');

          }else{
            buttonToggler.classList.remove('scrolled');
            navLink.classList.remove('scrolled');
            navLink2.classList.remove('scrolled');
            navLink3.classList.remove('scrolled');
            navLink4.classList.remove('scrolled');
            navLink5.classList.remove('scrolled');
            navLink6.classList.remove('scrolled');
            navChangeBg.classList.remove('scrolled');
          }
      }
    }

    scrollElement(element: any){
      console.log(element);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } 

    timer : any;
    oveflayDelay(){
      this.overflayStop();

      this.timer = setInterval(() => {
        this.overflay = false;
      },3000)
    }

    overflayStop(){
      // if(this.overflay == true){
      //   this.overflay = false;
      //   clearInterval(this.timer);
      // }
    }

}
