$(document).ready(function () {
  
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
  });



  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let hHeight = $('#header').height();
    if (scrollT >= top) {
      $('.slide').animate({ top: '0px', opacity: '1' }, 1000, 'easeOutExpo');
    }
    if (scrollT >= left) {
      $('.md').find('a').addClass('active');
    }
    if (scrollT > hHeight) {
      $('#header').addClass('active')
    } else {
      $('#header').removeClass('active');
    }
    if (scrollT >= newB) {
      $('#content > .new ul > li').addClass('active');
    }
  });

  $('.m_gnb ul > li > a').click(function (event) {
    event.preventDefault();
    if ($(this).next().css('display') == 'none') {//클릭한 개체 뒤 sub이 보여지고 있지 않다면
      $('.sub:visible').slideUp();
      //.sub개체들 중 보여지고 있는 상태만 개체는 slideUp을 실행하고
      $('.m_gnb ul > li > a').removeClass('active');
      $(this).next().slideDown();
      //클릭된 a 바로 뒤 sub개체는 slideDown이 실행된다
    } else {
      $(this).next().slideUp();
    };
  });
  $('.m_gnb ul > li > .sub').find('li').click(function (e) {
    e.preventDefault();
    if ($('.sub').css('display') == 'block') {
      $(this).addClass('active')
      $(this).siblings().removeClass('active');
    }
  });
});