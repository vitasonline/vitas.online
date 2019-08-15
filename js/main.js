$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        dots: 1,
        nav: 0,
        loop: 1,
        autoplay: 0,
        autoplayTimeout: 5000,
        autoplayHoverPause: 1
    });

    $('.header__button-menu').on('click', function () {
        $('.menu').slideToggle();
    });

    $('.menu__item').on('click', function () {
        $('.menu').slideToggle();
    });
});