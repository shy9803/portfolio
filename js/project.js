/* --- 변수 선언 --- */
// 프로젝트 목업 화면
const mku_mockup = document.querySelector('.prj_l_mockup'); // pc,tablet,mobile 모양 묶음
const mku_pc = document.querySelector('[data-key="pc"]'); // PC 크기의 이미지 바구니
const mku_tab = document.querySelector('[data-key="tablet"]'); // Tablet 크기의 이미지 바구니
const mku_mob = document.querySelector('[data-key="mobile"]'); // Mobile 크기의 이미지 바구니

// 프로젝트 정보 및 모달 팝업창
const prj_info = document.querySelector('.prj_l_info_cont'); // 정보 입력구간

const prj_btn = document.querySelector('.prj_l_info_btn'); // 모달 연결구간
const prj_modal = document.getElementById('prj_modal'); // 모달 화면
const prj_modal_info = document.querySelector('.prj_modal_btnwrap');
const prj_plan = prj_modal_info.querySelector('.prj_mod_btn_plan');
const prj_link = prj_modal_info.querySelector('.prj_mod_btn_link');
const prj_desc = prj_modal_info.querySelector('.prj_modal_info');

// 프로젝트 탭 메뉴 및 리스트
const prj_mnu_btn = document.querySelectorAll('.prj_r_mnu > button'); // 탭 메뉴
const prj_list = document.querySelectorAll('.prj_r_list li > picture > img'); // 리스트 이미지

/* --- 함수 작성 --- */
// 각 이미지를 클릭할 때
prj_list.forEach(item => {
  item.addEventListener('click', () => {
    // console.log(item);

    const ptf_alt = item.alt; // index.html의 img태그 alt명
    const select_data = project.find(itm => itm.name === ptf_alt); // img태그 alt명과 data.js와 비교하여 값 찾기
    // console.log(ptf_alt, select_data);

    // const matched = project.find(p => p.name === alt);

    // // 
    // if(matched) {
    //   const skill_list = matched.skill.toLowerCase().split(',').map(s => s.trim());
    //   const main_skill = skill_list.includes('react') ? 'react'
    //   : skill_list.includes('php') ? 'php'
    //   : skill_list.includes('jquery') ? 'jquery'
    //   : skill_list.includes('javascript') ? 'javascript'
    //   // : skill_list.includes('html5', 'css3') ? 'html+css'
    //   : 'others';xx
    //   img.dataset.type = main_skill;
    // }

    if(!select_data) return;

    // 이미지 가져와 출력
    const elements = mku_mockup.querySelectorAll('[data-key]'); // data-key의 pc, tablet, mobile값 저장
    // console.log(elements);

    elements.forEach(el => { // 각 클릭시
      const key = el.dataset.key;
      const value = select_data[key]; // key에 포함된 이미지 전체
      // console.log(key, value);

      // 이미지 경로 설정
      const img_src = './images/project_img/';
      const img_pc = select_data.pc;
      const img_tab = select_data.tablet;
      const img_mob = select_data.mobile;
      // console.log(img_pc, img_tab, img_mob);

      // 기존 이미지 제거
      mku_pc.innerHTML = '';
      mku_tab.innerHTML = '';
      mku_mob.innerHTML = '';

      // PC 이미지
      if (img_pc) { // 참일 경우
        const img = document.createElement('img'); // img태그 생성
        img.src = img_src + img_pc; // PC 이미지 경로 결합
        img.alt = ptf_alt + 'pc';
        mku_pc.appendChild(img); // 이미지 태그 삽입
      }
      // tablet 이미지
      if (img_tab) { // 참일 경우
        const img = document.createElement('img'); // img태그 생성
        img.src = img_src + img_tab; // Tablet 이미지 경로 결합
        img.alt = ptf_alt + 'tablet';
        mku_tab.appendChild(img); // 이미지 태그 삽입
        mku_tab.parentElement.style.display = 'block'; // 부모요소가 참일때 보이기
      } else {
        mku_tab.parentElement.style.display = 'none'; // 부모요소가 거짓일때 숨기기
      }
      // mobile 이미지
      if (img_mob) { // 참일 경우
        const img = document.createElement('img'); // img태그 생성
        img.src = img_src + img_mob; // 이미지 경로 결합 PC
        img.alt = ptf_alt + 'mobile';
        mku_mob.appendChild(img); // 이미지 태그 삽입
        mku_mob.parentElement.style.display = 'block'; // 부모요소가 참일때 보이기
      } else {
        mku_mob.parentElement.style.display = 'none'; // 부모요소가 거짓일때 숨기기
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
        el.textContent = value;
      }
    });

    // 해당 정보의 모달 팝업창 내용 변경
    if(select_data.plan) {
      prj_plan.href = select_data.plan;
      prj_plan.style.display = 'inline'; // 보이기
    } else {
      prj_plan.href = '#';
      prj_plan.style.display = 'none'; // 숨기기
    }

    if(select_data.link) {
      prj_link.href = select_data.link;
      prj_link.style.display = 'inline';
    } else {
      prj_link.href = '#';
      prj_link.style.display = 'none'; // 숨기기
    }

    if(select_data.detail) {
      prj_desc.textContent = select_data.detail;
    } else {
      prj_desc.textContent = '';
    }
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
prj_mnu_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    prj_mnu_btn.forEach(b => b.classList.remove('actmnu'));
    btn.classList.add('actmnu');

    const filter = btn.dataset.type;

    prj_list.forEach(item => {
      const item_type = item.dataset.type;

      if(filter === 'all' || item_type === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 이미지별 모달 내용 변경



// 이미지 및 정보 불러와서 출력 : 사용 안 한 수정된 skill.js 참고(data.js의 이미지 불러오기, GPT 이용한)

// 탭 메뉴 필터링 : 0306 수업 참고(jQuery -> JS) -> GPT 도움
// 모달 팝업창 내용 수정 : GPT 도움