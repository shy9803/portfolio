$(document).ready(function(){
  const modal = 
  `<div class="port_modal">
    <div class="port_modal_inner">
      <p>본 페이지는 비영리적 개인 포트폴리오 페이지입니다. <br> 일부 내용 및 이미지 등은 출처가 따로 있을 수 있습니다.</p>
      <p class="close_today">
        <input type="checkbox" name="today_close" id="today_close">
        <label for="today_close">오늘 하루 보지 않기</label>
      </p>
      <button type="button" id="modal_close_btn">닫기</button>
    </div>
  </div>`

  // body 태그의 안쪽 맨 뒤에 배치
  $('body').append(modal);

  // 쿠키 존재 확인 (있으면 모달 숨김)
  // 현재 브라우저에 쿠키정보가 있다면 모달 윈도가 뜨면 안 된다.
  if($.cookie('popup') == 'none') {
    $('.port_modal').hide();
  }
  

  // 닫기 버튼
  const c_btn = $('#modal_close_btn, .port_modal #today_close'); //modal label 추가(웹 접근성 향상 : 체크만 되어도 자동 처리)
  let ch = $('#today_close'); // 체크박스 변수

  c_btn.click(function() {
    // 닫기 버튼 이동(조건문)
    closePopup();
  });


  // 사용자가 체크박스에 체크했는지 여부를 따져서
  function closePopup() {
    if(ch.is(':checked')) { // 만약 체크박스 체크시
      // 쿠키 생성하고 저장
      $.cookie('popup', 'none', {expires: 1, path: '/'}); //쿠키 정보 생성
      $('.port_modal').fadeOut(); // 모달 숨기기
    } else {
      // 체크 안 된 경우라면 모달 윈도 닫기
      $('.port_modal').fadeOut();
    }
  }
});

// 250306, KDT 수업 중 내용 파일 -> 변경