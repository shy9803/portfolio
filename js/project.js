/*
  // 구상
  옆에 해당되는 상세보기 링크/모달 생성.
*/

const ptf_list = document.querySelectorAll('.prj_r_list > picture > img'); // 리스트 이미지
const mku_mockup = document.querySelector('.prj_l_mockup'); // pc,tablet,mobile 모양 묶음
const mku_pc = document.querySelector('.mku_pc > picture > img'); // PC 크기의 이미지 바구니
const mku_tab = document.querySelector('.mku_tab > picture > img'); // Tablet 크기의 이미지 바구니
const mku_mob = document.querySelector('.mku_mob > picture > img'); // Mobile 크기의 이미지 바구니
const prj_info = document.querySelector('.prj_l_info_cont'); // 정보 입력구간
const prj_btn = document.querySelector('.prj_l_info_btn'); // 모달 연결구간
const prj_modal = document.getElementById('prj_modal'); // 모달 화면
const prj_mnu_btn = document.querySelector('.prj_r_mnu > button'); // 탭 메뉴

// 각 이미지를 클릭할 때
ptf_list.forEach(item => {
  item.addEventListener('click', () => {
    // console.log(item);

    const ptf_alt = item.alt; // index.html의 img태그 alt명
    const select_data = project.find(itm => itm.name === ptf_alt); // img태그 alt명과 data.js와 비교하여 값 찾기
    // console.log(ptf_alt, select_data);

    if(!select_data) return;

    // 이미지 가져와 출력
    const elements = mku_mockup.querySelectorAll('[data-key]'); // data-key의 pc, tablet, mobile값 저장
    // console.log(elements);

    elements.forEach(el => { // 각 클릭시
      const key = el.dataset.key;
      const value = select_data[key]; // key에 포함된 이미지 전체
      // console.log(key, value);

      if(value !== undefined) { // 참일때 실행

        // 이미지 경로 설정
        const img_src = './images/project_img/';
        const img_pc = select_data.pc;
        const img_tab = select_data.tablet;
        const img_mob = select_data.mobile;
        // console.log(img_pc, img_tab, img_mob);

        // 이미지 경로 결합
        mku_pc.src = img_src + img_pc; // PC
        mku_pc.alt = ptf_alt + 'pc';
      
        if(img_tab || img_mob) { // projectxt.js에 이미지 내용이 있을 경우 불러온다
          mku_tab.src = img_src + img_tab; // Tablet
          mku_mob.src = img_src + img_mob; // Mobile
          mku_tab.alt = ptf_alt + 'tablet';
          mku_mob.alt = ptf_alt + 'mobile';

          mku_tab.style.display = 'block';
          mku_mob.style.display = 'block';
        } else {
          mku_tab.style.display = 'none';
          mku_mob.style.display = 'none';
        }
        // console.log(mku_pc.src, mku_tab.src, mku_mob.src);
      }
    });

    // 정보 가져와 출력
    const elements_info = prj_info.querySelectorAll('[data-key]');
    // console.log(elements_info);

    elements_info.forEach(el => {
      const key = el.dataset.key;
      const value = select_data[key];
      // console.log(key, value);

      if(value !== undefined) {
        if(el.tagName === 'p' && el.data-key === key) {
          el.value = value;
        } else {
          el.textContent = value;
        }
      }
    });

    // 해당 정보의 상세화면 연결링크 생성
    
  });
});

// 모달 팝업창 띄우기
prj_btn.addEventListener('click', () => {
  if(prj_modal) { // 참일 경우
    prj_modal.style.display = 'block';
  }

  const btn = document.querySelector('#prj_modal button');
  btn.addEventListener('click', () => {
    prj_modal.style.display = 'none';
  })
});

// 탭 메뉴 필터링
prj_mnu_btn.addEventListener('click', () => {

});

// 이미지별 모달 내용 변경



// 이미지 및 정보 불러와서 출력 : 사용 안 한 수정된 skill.js 참고(data.js의 이미지 불러오기, GPT 이용한)

// 탭 메뉴 필터링 : 0306 수업 참고(jQuery -> JS)