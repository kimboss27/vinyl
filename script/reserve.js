$(document).ready(function(){
    $('.slide_container').slick({
        slide: 'div',   
        infinite : true,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay : true,
        autoplaySpeed : 3000,
        speed: 300,
        fade: true,
        draggable: true,
        cssEase: 'linear'
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
      
      $('.wrapper').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        arrows:false,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              autoplay: false,
              autoplaySpeed: 2000,
              infinite: true,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              autoplay: false,
            }
          },
    
        ]
   
  });
      
      $('.gnb > ul > li > a').mouseenter(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().find('.sub').css({height:'300px', transition:'all 0.3s'});
        $(this).parent().siblings().find('.sub').css({height:'0px', transition:'none 0s'});
        let subH=$('.nav_bg').height();
        //console.log(subH);
        if(subH==300){
          $(this).parent().find('.sub').css({height:'300px', transition:'none 0s'});
        }
        if($(this).parent().children().length>=2){
          $('.nav_bg').stop().addClass('active');
        }else{
          $('.nav_bg').stop().removeClass('active');
          $(this).parent().addClass('on')
        }
        });
        $('.gnb').mouseleave(function(){
          $('.gnb > ul > li').removeClass('active');
          $('.gnb > ul > li').find('.sub').stop().css({height:'0px',transition:'all 0.3s'})
          $('.nav_bg').stop().removeClass('active')
        });
        $('#header').mouseleave(function(){
          $('.gnb > ul > li').removeClass('active');
          $('.gnb > ul > li').find('.sub').stop().css({height:'0px',transition:'all 0.3s'})
          $('.nav_bg').stop().removeClass('active')
        });
        
      $('.info_menu > ul > li > a').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        let index=$(this).parent().index();
        //console.log(index);
        $('.lp_info > div').eq(index).show();
        $('.lp_info > div').eq(index).siblings().hide();
      });
      /*
      function number_format(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
      }
      */
      
        let num=1;
        let priceA=Number($('.price').html());
        let price=Number($('.price').text());
        $('.price').text(f_addComma(price));
        $('.total').text(f_addComma(price));
        function f_addComma (price) {
          return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        function f_delComma (price) {
          return String(price).replace( /,/g,"");
        }
        $('.counting').text(num);
        $('.plus').click(function(){
            num++;
            price+=priceA;
            $('.counting').text(num);
            $('.price').text(f_addComma(price));
            $('.total').text(f_addComma(price));
        });
        $('.minus').click(function(){
          num--;
          price-=priceA;
          $('.counting').text(num);
          $('.price').text(f_addComma(price));
          $('.total').text(f_addComma(price));
          if(num<=0){
            num=1;
            $('.counting').text(num);
            alert('최소 1개 이상 구매 할 수 있습니다.')
          }
          if(price<=74100){
            price=74100;
            $('.price').text(f_addComma(price));  
            $('.total').text(f_addComma(price));
          }
      });
      
});