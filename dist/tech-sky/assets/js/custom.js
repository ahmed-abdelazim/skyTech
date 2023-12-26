(function ($) {

  "use strict";

  // PRE LOADER
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
  });


  //Navigation Section
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });


  // PARALLAX EFFECT
  // $.stellar();


  // SMOOTHSCROLL
  $(function () {
    $('.navbar-default a, #home a, footer a').on('click', function (event) {
      var $anchor = $(this);
      if ($anchor.attr('href').startsWith('#')) {
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      }
      else {
        event.preventDefault();
      }
    });
  });


  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);
