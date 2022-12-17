// JavaScript Document
$(document).ready(function () {
    $('#slider1').slick({
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        fade:true,
        speed: 5000,
        cssEase: 'cubic-bezier(.645, .045, .355, 1)',
        arrows: false,
        dots:false,
        //dotsClass:'square-dots',
    });
});
