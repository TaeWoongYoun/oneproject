$(document).ready(function(){
    // 마우스오버 메뉴
      $('.HeaderNavi > li').mouseover(function(){
        $(this).find('.SubMenu').stop().slideDown(300);
      }).mouseout(function(){
        $(this).find('.SubMenu').stop().slideUp(300);
      });

      // ******  탭 메뉴 공지사항 갤러리  ****** //
      $(function(){
        $('.TabMenu>li>a').click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
          // return false;
         /* return false를 반드시 적기.
            버블링(bubbling) 때문. 버블링이란?
            한 요소에 이벤트가 발생하면,
            이 요소에 할당된 핸들러가 동작하고,
            이어서 부모 요소의 핸들러가 동작합니다.
      
            가장 최상단의 조상 요소를 만날 때까지
            이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.
      
            이벤트가 제일 깊은 곳에 있는 요소에서 시작해 부모 요소를 거슬러 올라가며 발생하는 모양이 마치 물속 거품(bubble)과 닮았기 때문입니다.
      
            클릭 이벤트를 중단하고, 호출한 곳으로 되돌아 가라~라는 의미.
            a를 클릭했을 때, 부모의 요소도 클릭한것 처럼 처리가 되기때문에
           HTML을 클릭 이전 상태로 되돌리기 위해서
         */
          });
        });
    
        

    });