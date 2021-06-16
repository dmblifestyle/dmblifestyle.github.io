import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      /*------------------
    Preloader
--------------------*/

        $(".loader").fadeOut();
        $("#preloder").delay(20).fadeOut("slow");

        //Masonary
        // $('.gallery__container').masonry({
        //   columnWidth: '.grid-sizer',
        //   itemSelector: '.gc__item',
        //   gutter: 20
        // });
      });


      /*------------------
          Background Set
      --------------------*/
      $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
      });

      //Canvas Menu
      $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
      });

      $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
      });

      /*------------------
          Accordin Active
      --------------------*/
      $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
      });

      $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
      });


  }

}
