/* 
  // 작성할 효과 구상
  이미지 클릭 -> 하단의 div에 해당 내용 각 출력

  // 기술목록 -> data로 모아서 정리출력
*/

// 이미지 목록 나열
const skl_list = document.querySelector('.skl_list'); // 리스트 출력 위치(ul class="skl_list" 하나만 존재)
const skl_img_src = './images/skill_img/'; //공통 경로

// 이미지별 클릭시 해당 정보 출력하기
// const skl_img = document.querySelectorAll('.skl_wrap > ul > li > picture > img'); // 각 스킬 이미지 부모 태그
const skl_info = document.querySelector('.skl_info'); // 내용 출력

data.forEach(item => { // 이미지 출력
  // 요소 태그 생성
  const skl_list_li = document.createElement('li');
  const skl_list_pic = document.createElement('picture');
  const skl_list_img = document.createElement('img');

  skl_list_img.src = skl_img_src + item.img; // 이미지 경로 결합
  skl_list_img.alt = item.name;
  skl_list_img.dataset.name = item.name;

// 각 요소 클릭시 해당 부분 선택
skl_list_img.addEventListener('click', () => {
    //console.log(sklm);

    //const skl_info_txt = skl_info.firstElementChild; // 첫번째 자식요소 찾기
    //const skl_info_range = skl_info.lastElementChild; // 마지막 자식요소 찾기
    //console.log(skl_info_txt, skl_info_range);

    // 자식요소에 해당하는 내용으로 변경하도록 (데이터 값을 불러와서)
    //skl_info_txt.innerHTML = 'new'; // 첫번째 자식요소 내용 변경

    //console.log(skl_info_txt.dataset.info); // index.html의 data-*의 데이터 불러오기

    // const skl_alt = sklm.alt; // img태그의 alt값
    // const select_data = data.find(item => item.name === skl_alt); // 배열 data.js의 name과 일치값 찾기

    // if(!select_data) return; // 참일때 리턴

    const elements = skl_info.querySelectorAll('[data-key]'); // data-key 배열 값 전체

    elements.forEach(el => { // 각 요소 클릭시
      const key = el.dataset.key; // html의 data-key값 불러오기
      const value = item[key]; // 선택된 data.js의 key에 해당하는 값

      if(value !== undefined) { // 참일때
        if(el.tagName === "INPUT" && el.type === "range") { // input[type=range]일 때
          el.value = value; // 값 저장
        } else {
          el.textContent = value; // 텍스트로 저장
        }
      }
    });
  });
  skl_list_pic.appendChild(skl_list_img);
  skl_list_li.appendChild(skl_list_pic);
  skl_list.appendChild(skl_list_li);
  // });
});


// 각 요소 클릭시 해당 부분 선택 참고 사이트: https://codingeverybody.kr/자바스크립트
// dataset 내용: 구글 검색(제미나이 결과)
// 각 요소 클릭시 data.js 값 불러오기 : GPT 참고
// data.js로 이미지 불러오기 : GPT 참고

/* 3. JavaScript – 카테고리별 분류 및 출력
const skl_wrap = document.querySelector('.skl_wrap');
const skl_info = document.querySelector('.skl_info');
const imgBasePath = './images/skill_img/';

// 1. 카테고리 분류
const categoryMap = {};

// data를 순회하며 카테고리별 그룹 만들기
data.forEach(item => {
  if (!categoryMap[item.category]) {
    categoryMap[item.category] = []; // 카테고리 배열 생성
  }
  categoryMap[item.category].push(item);
});

// 2. 각 카테고리에 대해 <ul> 생성 및 이미지 추가
Object.keys(categoryMap).forEach(category => {
  const ul = document.createElement('ul');

  // 카테고리 제목을 맨 앞 <li>로 추가
  const titleLi = document.createElement('li');
  titleLi.textContent = category;
  ul.appendChild(titleLi);

  categoryMap[category].forEach(item => {
    const li = document.createElement('li');
    const picture = document.createElement('picture');
    const img = document.createElement('img');

    img.src = imgBasePath + item.img;
    img.alt = item.name;
    img.dataset.name = item.name;

    // 클릭 이벤트 → skl_info 갱신
    img.addEventListener('click', () => {
      const elements = skl_info.querySelectorAll('[data-key]');
      elements.forEach(el => {
        const key = el.dataset.key;
        const value = item[key];
        if (value !== undefined) {
          if (el.tagName === 'INPUT' && el.type === 'range') {
            el.value = value;
          } else {
            el.textContent = value;
          }
        }
      });
    });

    picture.appendChild(img);
    li.appendChild(picture);
    ul.appendChild(li);
  });

  // skl_info 이전에 삽입
  skl_wrap.insertBefore(ul, skl_info);
});

*/