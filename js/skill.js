/* 
  // 작성할 효과 구상
  이미지 클릭 -> 하단의 div에 해당 내용 각 출력

*/

const skl = document.querySelectorAll('.skl_wrap > ul'); // 각 부분 (프론트/백엔드/관리/디자인/문서관리)
const skl_img = document.querySelectorAll('.skl_wrap > ul > li > picture'); // 각 스킬 이미지 부모 태그
const skl_info = document.querySelector('.skl_info'); // 내용 출력

// 각 요소 클릭시 해당 부분 선택
skl_img.forEach(sklm => {
  sklm.addEventListener('click', () => {
    console.log(sklm);

    const skl_info_txt = skl_info.firstElementChild; // 첫번째 자식요소 찾기
    const skl_info_range = skl_info.lastElementChild; // 마지막 자식요소 찾기
    console.log(skl_info_txt, skl_info_range);

    // 자식요소에 해당하는 내용으로 변경하도록 (데이터 값을 불러와서)
    skl_info_txt.innerHTML = 'new'; // 첫번째 자식요소 내용 변경
  });
});


// 각 요소 클릭시 해당 부분 선택 참고 사이트: https://codingeverybody.kr/자바스크립트
