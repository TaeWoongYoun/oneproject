$(document).ready(function(){
    // 마우스오버 메뉴
      $('.HeaderNavi > li').mouseover(function(){
        $(this).find('.SubMenu').stop().slideDown(600);
      }).mouseout(function(){
        $(this).find('.SubMenu').stop().slideUp(300);
      });


    
        // 이미지슬라이드 페이드 인 페이드 아웃
  $('.imgSlide a:gt(0)').hide();

  setInterval(function(){
    $('.imgSlide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.imgSlide');
  }, 3000);

  $(function() {
    let tabBtn = $(".tab-btn > ul > li");   //버튼 설정
    let tabCont = $(".tab-cont > div");     //콘텐츠 설정
    tabCont.hide().eq(0).show();    //첫번째 콘텐츠만 보이게 설정

    tabBtn.click(function(){
        const index = $(this).index();  //클릭한 번호를 저장
        // alert(index);

        $(this).addClass("active").siblings().removeClass("active");    //내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
        tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
    });
});


    });

