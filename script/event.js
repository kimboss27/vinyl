$(document).ready(function(){
  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let hHeight = $('#header').height();
    //console.log(scrollT);
    if(hHeight<scrollT){
      $('#header').addClass('active');
    }else{
      $('#header').removeClass('active')
    }
  });
  $('.toggle').click(function () {
    $(this).toggleClass('on');
    $('.m_gnb').toggleClass('on');
    $('html').toggleClass('mobile_menu');
  
  });
  $('.m_gnb ul > li > a').click(function (event) {
    
    if ($(this).next().css('display') == 'none') {
      $('.sub:visible').slideUp();
      $('.m_gnb ul > li > a').removeClass('active');
      $(this).next().slideDown();
    } else {
      $(this).next().slideUp();
    };
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
});