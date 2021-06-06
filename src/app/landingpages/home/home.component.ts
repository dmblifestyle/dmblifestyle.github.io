import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {

      /*------------------
      Navigation
    --------------------*/
      // $(".header__menu").slicknav({
      //   prependTo: '#mobile-menu-wrap',
      //   allowParentLinks: true,
      //   'closedSymbol': '<i class="fa fa-angle-right"></i>', // Character after collapsed parents.
      //   'openedSymbol': '<i class="fa fa-angle-up"></i>', // Character after expanded parents.
      // });

      /*--------------------------
          Testimonial Slider
      ----------------------------*/
      // $(".testimonial__slider").owlCarousel({
      //   loop: true,
      //   margin: 0,
      //   items: 2,
      //   dots: true,
      //   smartSpeed: 1200,
      //   autoHeight: false,
      //   autoplay: true,
      //   responsive: {
      //     768: {
      //       items: 2,
      //     },
      //     0: {
      //       items: 1,
      //     }
      //   }
      // });

      /*------------------
      Magnific
    --------------------*/
      // $('.video-popup').magnificPopup({
      //   type: 'iframe'
      // });

      // $('.image-popup').magnificPopup({
      //   type: 'image'
      // });

      /*-------------------
      Nice Select
    --------------------- */
      // $("select").niceSelect();

      /*-------------------
      Datepicker
    --------------------- */
      // $(".datepicker").datepicker({
      //   minDate: 0
      // });
    }, 500);

  }

}
