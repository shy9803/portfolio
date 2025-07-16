const skl_img = document.querySelectorAll('.skl_wrap > ul > li > picture > img'); // 각 스킬 이미지 부모 태그
const skl_info = document.querySelector('.skl_info'); // 내용 출력

// 각 요소 클릭시 해당 부분 선택
skl_img.forEach(sklm => {
  sklm.addEventListener('click', () => {
    const skl_alt = sklm.alt; // img태그의 alt값
    const select_data = data.find(item => item.name === skl_alt); // 배열 data.js의 name과 일치값 찾기

    if(!select_data) return; // 참일때 리턴

    const elements = skl_info.querySelectorAll('[data-key]'); // data-key 배열 값 전체

    elements.forEach(el => { // 각 요소 클릭시
      const key = el.dataset.key; // html의 data-key값 불러오기
      const value = select_data[key]; // 선택된 data.js의 key에 해당하는 값

      if(value !== undefined) { // 참일때
        if(el.tagName === "INPUT" && el.type === "range") { // input[type=range]일 때
          el.value = value; // 값 저장
        } else {
          el.textContent = value; // 텍스트로 저장
        }
      }
    });
  });
});


// 각 요소 클릭시 해당 부분 선택 참고 사이트: https://codingeverybody.kr/자바스크립트
// dataset 내용: 구글 검색
// 각 요소 클릭시 data.js 값 불러오기 : GPT 참고