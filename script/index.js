$(document).ready(function () {
  $('.slide_container').slick({
    infinite: true,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    fade: true,
    draggable: true,
    cssEase: 'linear'
  });
  $('.best_wrap').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        }
      },

    ]
  });
  $('.baner_container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: false,
  });

 
  $('.gnb > ul > li > a').mouseenter(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().find('.sub').css({ height: '300px', transition: 'all 0.3s' });
    $(this).parent().siblings().find('.sub').css({ height: '0px', transition: 'none 0s' });
    let subH = $('.nav_bg').height();
    if (subH == 300) {
      $(this).parent().find('.sub').css({ height: '300px', transition: 'none 0s' });
    }
    if ($(this).parent().children().length >= 2) {
      $('.nav_bg').stop().addClass('active');
    } else {
      $('.nav_bg').stop().removeClass('active');
      $(this).parent().addClass('on')
    }
  });
  $('.gnb').mouseleave(function () {
    $('.gnb > ul > li').removeClass('active');
    $('.gnb > ul > li').find('.sub').stop().css({ height: '0px', transition: 'all 0.3s' })
    $('.nav_bg').stop().removeClass('active')
  });
  $('#header').mouseleave(function () {
    $('.gnb > ul > li').removeClass('active');
    $('.gnb > ul > li').find('.sub').stop().css({ height: '0px', transition: 'all 0.3s' })
    $('.nav_bg').stop().removeClass('active')
  });


  $('.toggle').click(function () {
    $(this).toggleClass('on');
    $('.m_gnb').toggleClass('on');
    $('html').toggleClass('mobile_menu');
  });

  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let hHeight = $('#header').height();
    let top = Math.round($('.new').offset().top)-500;
    let left = Math.round($('.md').offset().top)-200;
    
    if (scrollT >= top) {
      $('.new_wrap').animate({ top: '0px', opacity: '1' }, 1500, 'easeOutExpo');
    }
    
    if (scrollT >= left) {
      $('.md').find('.item').addClass('active');
    }
    if (scrollT > hHeight) {
      $('#header').addClass('active')
    } else {
      $('#header').removeClass('active');
    }

  });

  $('.m_gnb ul > li > a').click(function () {
    
    if ($(this).next().css('display') == 'none') {
      $('.sub:visible').slideUp();
      $('.m_gnb ul > li > a').removeClass('active');
      $(this).next().slideDown();
    } else {
      $(this).next().slideUp();
    };
  });
});