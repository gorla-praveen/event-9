$(document).ready(function () {

    /* ===========================
       Preloader
       =========================== */
    $(window).on('load', function () {
        $('#preloader-active').fadeOut(800);
    });

    /* ===========================
       Sticky Header
       =========================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 80) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');
        }

        // Back to top
        if ($(window).scrollTop() > 300) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    });

    /* ===========================
       Back to Top
       =========================== */
    $('#back-to-top .top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 700);
    });

    /* ===========================
       Hero Slider
       =========================== */
    if ($('.slider-active').length > 0) {
        $('.slider-active').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            items: 1,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }

    /* ===========================
       Brand / Sponsor Carousel
       =========================== */
    if ($('.brand-active').length > 0) {
        $('.brand-active').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            margin: 30,
            smartSpeed: 600,
            responsive: {
                0:    { items: 2 },
                480:  { items: 3 },
                768:  { items: 4 },
                992:  { items: 5 },
                1200: { items: 6 }
            }
        });
    }

    /* ===========================
       Countdown Timer
       =========================== */
    function updateCountdown() {
        // Target date: Jan 21, 2026 (updated for project context)
        var targetDate = new Date('2026-08-21T09:00:00').getTime();
        var now = new Date().getTime();
        var distance = targetDate - now;

        if (distance <= 0) {
            $('#days').text('00');
            $('#hours').text('00');
            $('#minutes').text('00');
            $('#seconds').text('00');
            return;
        }

        var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days < 10 ? '0' + days : days);
        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ===========================
       Mobile Menu Toggle
       =========================== */
    // Simple mobile nav toggle
    var mobileNav = '<div class="mobile-nav-toggle"><i class="fas fa-bars"></i></div>';
    $('.mobile_menu').html(mobileNav);

    $(document).on('click', '.mobile-nav-toggle', function () {
        if ($('.mobile-nav-wrap').length === 0) {
            var navHtml = '<div class="mobile-nav-wrap">' + $('#navigation').clone().prop('outerHTML') + '</div>';
            $('.header-area').append(navHtml);
        }
        $('.mobile-nav-wrap').toggleClass('active');
    });

    /* ===========================
       Scroll Animation
       =========================== */
    function animateOnScroll() {
        $('.single-team, .single-blog, .single-schedule, .single-pricing').each(function () {
            var elemPos = $(this).offset().top;
            var scrollPos = $(window).scrollTop() + $(window).height() - 80;
            if (scrollPos > elemPos) {
                $(this).addClass('animated fadeInUp');
            }
        });
    }

    $(window).on('scroll', animateOnScroll);
    animateOnScroll();

    /* ===========================
       Video Popup (simple redirect)
       =========================== */
    $(document).on('click', '.popup-video', function (e) {
        e.preventDefault();
        var videoUrl = $(this).attr('href');
        window.open(videoUrl, '_blank');
    });

    /* ===========================
       Active Nav Link on Scroll
       =========================== */
    $(window).on('scroll', function () {
        var scrollY = $(window).scrollTop();
        $('section[id], div[id]').each(function () {
            var sectionTop = $(this).offset().top - 100;
            var sectionId = $(this).attr('id');
            if (scrollY >= sectionTop) {
                $('#navigation li a').removeClass('active-link');
                $('#navigation li a[href="#' + sectionId + '"]').addClass('active-link');
            }
        });
    });

});
