$(document).ready(function(){
    // 마우스오버 메뉴
      $('.HeaderNavi > li').mouseover(function(){
        $(this).find('.SubMenu').stop().slideDown(300);
      }).mouseout(function(){
        $(this).find('.SubMenu').stop().slideUp(300);
      });


    });