$(function () {
  // glonav
  var nav = $('.globalNav');
  nav.clone().appendTo('.sp-nav-list');
  nav.clone().appendTo('.footer_navi');

 // slideDown
 $('#header_nav li').hover(function () {
  $("ul:not(:animated)", this).slideDown();
 }, function () {
  $("ul.dropdown", this).slideUp();
 });

 // rollover
 $(function () {
  $("img.rollover").mouseover(function () {
   $(this).attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
  }).mouseout(function () {
   $(this).attr("src", $(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
  });
 });

 // active
 $('#header_nav a').each(function () {
  var $href = $(this).attr('href');
  // top
  if (location.pathname.match(".php")) {
   $('#header_nav a:eq(0)').removeClass('active');
  } else {
   $('#header_nav a:eq(0)').addClass('active');
  }
  // other
  if (location.href.match($href)) {
   $(this).addClass('active');
   $('#header_nav a:eq(0)').removeClass('active');
  } else {
   $(this).removeClass('active');
  }
 });


 // scroll
 $(function () {
  var headerHeight = $('#l-header').innerHeight(); // headerの高さ
  var urlHash = location.hash;
  if (urlHash) {
   $('body,html').stop().scrollTop(0);
   setTimeout(function () {
    var target = $(urlHash);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({
     scrollTop: position
    }, 500);
   }, 100);
  }
  $('a[href^="#"]').click(function () {
   var href = $(this).attr("href");
   var target = $(href);
   var position = target.offset().top - headerHeight;
   $('body,html').stop().animate({
    scrollTop: position
   }, 500);
  });
 });



 // animation
 $(function () {
  if ($(window).innerWidth() >= 890) {
   Position = $(window).height() + $(window).scrollTop();
   $(".animation").each(function (i) {
    if (Position > $(this).offset().top) {
     $(this).delay(60 * i).queue(function () {
      $(this).addClass("on");
     });
    }
   });
   $(function () {
    var
    $nav = $('#l-header,#nav-toggle'),
     navPosition = $nav.offset().top;

    $(window).on('scroll', function () {
     if ($(this).scrollTop() > navPosition) {
      $nav.addClass('is-fixed');
     } else {
      $nav.removeClass('is-fixed');
     }
    });
   });
  };
 });
 $(window).scroll(function () {
  // animation
  scrollPosition = $(window).height() + $(window).scrollTop();
  $(".animation").each(function () {
   if (scrollPosition - 100 > $(this).offset().top) {
    $(this).addClass("on");
   }
  });
 });

 $(window).scroll(function () {
  // animation
  scrollPosition = $(window).height() + $(window).scrollTop();
  $(".animation-round").each(function () {
   if (scrollPosition - 400 > $(this).offset().top) {
    $(this).addClass("on");
   }
  });
 });

 // page-top
 var topBtn = $('#page-top,#fixed-btn');
 topBtn.hide();
 $(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
   topBtn.fadeIn();
  } else {
   topBtn.fadeOut();
  }
 });

 // SP
 $('#nav-toggle ').on('click', function () {
  $('body').toggleClass('open');
 });
 $('#sp-nav a').on('click', function () {
  $('body').removeClass('open');
 });
 $(window).on('load', function () {
  $('#js-loader').fadeOut(1200);
 });

 $(window).scroll(function() {
    var windowH = $(window).height(),
      scrollY = $(window).scrollTop();
    $('.bgLRextendTrigger').each(function() {
      var elPosition = $(this).offset().top;
      if (scrollY > elPosition - windowH) {
        $(this).addClass("bgLRextend");
      } else {
        $(this).removeClass("bgLRextend");
      }
    });
  });
});