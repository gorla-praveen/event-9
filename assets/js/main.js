(function ($)
{ "use strict"

/* 1. Proloder */
$(window).on('load', function () {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
});

/* 2. sticky And Scroll UP */
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 400) {
    $(".header-sticky").removeClass("sticky-bar");
    $('#back-top').fadeOut(500);
  } else {
    $(".header-sticky").addClass("sticky-bar");
    $('#back-top').fadeIn(500);
  }
});

// Scroll Up
$('#back-top a').on("click", function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});

/* 3. slick Nav */
var menu = $('ul#navigation');
if(menu.length){
  menu.slicknav({
    prependTo: ".mobile_menu",
    closedSymbol: '+',
    openedSymbol:'-'
  });
}

/* 4. MainSlider-1 */
function mainSlider() {
  var BasicSlider = $('.slider-active');

  BasicSlider.on('init', function () {
    var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });

  BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });

  BasicSlider.slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: false
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');

      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });

      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
}
mainSlider();

/* 5. Testimonial Active */
var testimonial = $('.h1-testimonial-active');
if(testimonial.length){
  testimonial.slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

/* 6. Nice Select */
var nice_Select = $('select');
if(nice_Select.length){
  nice_Select.niceSelect();
}

/* 7. data-background */
$("[data-background]").each(function () {
  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});

/* 10. WOW active */
new WOW().init();

/* 11. Mailchimp */
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();

/* 12. Popups */
var popUp = $('.single_gallery_part, .img-pop-up');
if(popUp.length){
  popUp.magnificPopup({
    type: 'image',
    gallery:{ enabled:true }
  });
}

var videoPop = $('.popup-video');
if(videoPop.length){
  videoPop.magnificPopup({
    type: 'iframe'
  });
}

/* 13. counterUp */
$('.counter').counterUp({
  delay: 10,
  time: 3000
});

/* --------------------------
   COUNTDOWN TIMER (FIXED)
--------------------------- */

function startCountdown() {
  const target = new Date("2026-12-31 23:59:59").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (document.getElementById("days"))
      document.getElementById("days").innerText = days;

    if (document.getElementById("hours"))
      document.getElementById("hours").innerText = hours;

    if (document.getElementById("minutes"))
      document.getElementById("minutes").innerText = minutes;

    if (document.getElementById("seconds"))
      document.getElementById("seconds").innerText = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

startCountdown();

/* 14. Datepicker */
$('#datepicker1').datepicker();

/* 15. Time Picker */
$('#timepicker').timepicker();

})(jQuery);