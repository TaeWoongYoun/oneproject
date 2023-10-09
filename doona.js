$(function(){  //코드를 바깥쪽에 적어서 제이쿼리 실행

    //버튼클릭시 동작하는 코드
    $("button").click(function(){ //클릭했을 때 어떤일이 일어날지 (button은 html의 버튼태그다.)
      $(".modal").fadeIn();//페이드인으로 모달창을 보이게 해줌
    });
    
    //모달창 클릭시 동작하는 코드
    $(".modal_content").click(function(){ //class로 선언해둔 modal_content안의 영역을 클릭하면 
      $(".modal").fadeOut();//클릭했을때 사라지게 하는 코드 페이드아웃을 이용함
    });
    
  });