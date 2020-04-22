import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { slides } from '../slides';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements AfterViewInit {

  slides = slides;
  slideID;

  rotateToSlide = function(slideID, scrollStyle) {
    this.changeOpacityAll();
    this.slide = document.querySelector( `#image${slideID}` );
    let slide = this.slide;
    let slideOffset = slide.offsetLeft;

    let slider = document.querySelector('.slider-wrapper');
    let sliderWidth = window.getComputedStyle(slider).getPropertyValue('width');
    let slideExtraOffset;
    if (sliderWidth == '300px') {
      slideExtraOffset = 50;
    } else {
      slideExtraOffset = 100;
    }

    if ( scrollStyle == 'instantScroll' ) {
      slider.classList.add('instant-scroll');
      slider.scrollLeft = 0 + slideOffset - slideExtraOffset;
      slider.classList.remove('instant-scroll');
    } else {
      slider.scrollLeft = 0 + slideOffset - slideExtraOffset;
    }

    slide.classList.add('active');
  };


  changeOpacityAll = function () {

    let slidesAll = document.querySelectorAll('.slide');
    slidesAll.forEach( changeOpacity )

    function changeOpacity(item) {
      item.classList.remove('active');
    }

  }

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngAfterViewInit(){

      // определить запрошенный слайд
      this.route.paramMap.subscribe(params => {
        this.slideID = +params.get('slideID');
      });

      // отмотать до слайда
      this.rotateToSlide(this.slideID, 'instantScroll');

      // отключить скролл слайдера клавиатурой
      window.addEventListener("keydown", function(e) {
          if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
              e.preventDefault();
          }
      }, false);

      // обновлять страницу при переходе между версиями адаптивности
      window.addEventListener("resize", function() {
        let windowWidth = this.window.innerWidth;
        if ( windowWidth >= 539 && windowWidth <= 540 ) {
          this.location.reload();
        }
      });

  }

}
