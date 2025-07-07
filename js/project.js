/* --- 변수 선언 --- */
// 프로젝트 목업 화면
const mku_mockup = document.querySelector('.prj_l_mockup'); // pc,tablet,mobile 모양 묶음
const mku_pc = document.querySelector('[data-key="pc"]'); // PC 크기의 이미지 바구니
const mku_tab = document.querySelector('[data-key="tablet"]'); // Tablet 크기의 이미지 바구니
const mku_mob = document.querySelector('[data-key="mobile"]'); // Mobile 크기의 이미지 바구니

// 프로젝트 간단 설명
const prj_info = document.querySelector('.prj_l_info_cont'); // 간단한 소개 설명
const prj_btn = document.querySelector('.prj_l_info_btn'); // 상세보기 버튼 (모달 열기)

// 프로젝트 모달 팝업창
const prj_modal = document.getElementById('prj_modal'); // 모달 화면
const prj_modal_cont = document.querySelector('.prj_modal_btnwrap');
const prj_plan = prj_modal_cont.querySelector('.prj_mod_btn_plan');
const prj_link = prj_modal_cont.querySelector('.prj_mod_btn_link');
const prj_desc = document.querySelector('.prj_modal_info');

// 프로젝트 탭 메뉴 및 리스트
const prj_mnu_btn = document.querySelectorAll('.prj_r_mnu > button'); // 탭 메뉴
const prj_list_ul = document.querySelector('.prj_r_list ul'); // 프로젝트 리스트

/* --- 함수 & 이벤트 작성 --- */
// 프로젝트 리스트 추가
function normal_skill(skill_arr) {
  const skill_set = new Set(skill_arr.map(s => s.toLowerCase()));
  const filter_type = [];

  // data 폴더의 내용과 일치하도록 data-type 변환
  if(skill_set.has('html') || skill_set.has('html5')) filter_type.push('html');
  if(skill_set.has('css') || skill_set.has('css3')) filter_type.push('css');
  if(skill_set.has('javascript') || skill_set.has('js')) filter_type.push('js');
  if(skill_set.has('jquery')) filter_type.push('jquery');
  if(skill_set.has('php')) filter_type.push('php');
  if(skill_set.has('react')) filter_type.push('react');

  return filter_type.join('+');
}

// 리스트 목록 불러와 출력하기
function prjlist() {
  project.forEach(prj => {
    const li = document.createElement('li'); // li 태그 생성
    const pic = document.createElement('picture'); // pitcure 태그 생성
    const img = document.createElement('img'); // img 태그 생성

    img.src = './images/project_img/' + prj.img[0].main; // data 폴더의 메인 이미지
    img.alt = prj.name;
    img.dataset.type = normal_skill(prj.skill); // 필터링용
    
    pic.appendChild(img); // img 태그(자식)를 picture 태그(부모)에 추가하는 메서드
    li.appendChild(pic); // pitcure 태그(자식)를 li 태그(부모)에 추가하는 메서드
    prj_list_ul.appendChild(li); // li 태그(자식)를 ul 태그(부모)에 추가하는 메서드
  });
}

// 탭 필터링 + 이미지 클릭 시 상세 정보 표시 기능
function setlist() {
  const prj_list_img = document.querySelectorAll('.prj_r_list li > picture > img'); // 리스트 이미지

  // 탭 메뉴 필터링
  prj_mnu_btn.forEach(btn => {
    btn.addEventListener('click', () => {
      prj_mnu_btn.forEach(b => b.classList.remove('actmnu')); // 활성화 서식 제거
      btn.classList.add('actmnu'); // 활성화 서식 적용
  
      const filter = btn.dataset.type; // 탭 메뉴 필터의 data-type을 변수 저장
  
      prj_list_img.forEach(item => {
        const item_type = item.dataset.type; // 각 프로젝트 기술의 data-type을 변수 저장

        item.parentElement.parentElement.style.display = (filter === 'all' || item_type.includes(filter)) ? 'block' : 'none'; // 'all' 이면 전체 또는 특정 기술이면 해당 프로젝트만 보이게, 아니면 안 보이게.
      });
    });
  });

  // 이미지 클릭 시 상세 정보 출력
  prj_list_img.forEach(item => {
    item.addEventListener('click', () => handle_project(item));
  });
}

// 각 이미지를 클릭할 때
function handle_project(item) {
    // console.log(item);

    const prj_alt = item.alt; // index.html의 img태그 alt명
    const select_data = project.find(prj => prj.name === prj_alt); // img태그 alt명과 data.js와 비교하여 값 찾기

    if(!select_data) return;

    // projextxt.js의 img[]의 해당 값 찾기
    const getkey = key => {
      const found = select_data.img.find(obj => obj[key]); // keyy에 맞는 내용을 찾는다.
      return found ? found[key] : null; // 참이면 key값이 포함된 값을, 거짓이면 null값을 반환.
    }

    // 이미지 경로 설정
    const img_src = './images/project_img/';

    // projextxt.js의 img[]에 각 일치하는 값 변수에 저장
    const img_pc = getkey('pc');
    const img_tab = getkey('tablet');
    const img_mob = getkey('mobile');
    // console.log(img_pc, img_tab, img_mob);

    // 기존 이미지 제거
    mku_pc.innerHTML = '';
    mku_tab.innerHTML = '';
    mku_mob.innerHTML = '';

    // PC 이미지
    if (img_pc) { // 참일 경우
      const img = document.createElement('img'); // img태그 생성
      img.src = img_src + img_pc; // PC 이미지 경로 결합
      img.alt = prj_alt + 'pc'; // PC 이미지 대체 텍스트
      mku_pc.appendChild(img); // 이미지 태그 삽입(img 태그(자식)를 부모에 요소로 추가)
    }
    // tablet 이미지
    if (img_tab) { // 참일 경우
      const img = document.createElement('img'); // img태그 생성
      img.src = img_src + img_tab; // Tablet 이미지 경로 결합
      img.alt = prj_alt + 'tablet'; // Tablet 이미지 대체 텍스트
      mku_tab.appendChild(img); // 이미지 태그 삽입(img 태그(자식)를 부모에 요소로 추가)
      mku_tab.parentElement.style.display = 'block'; // 부모요소가 참일때 보이기
    } else {
      mku_tab.parentElement.style.display = 'none'; // 부모요소가 거짓일때 숨기기
    }
    // mobile 이미지
    if (img_mob) { // 참일 경우
      const img = document.createElement('img'); // img태그 생성
      img.src = img_src + img_mob; // Mobile 이미지 경로 결합
      img.alt = prj_alt + 'mobile'; // Mobile 이미지 대체 텍스트
      mku_mob.appendChild(img); // 이미지 태그 삽입(img 태그(자식)를 부모에 요소로 추가)
      mku_mob.parentElement.style.display = 'block'; // 부모 요소가 참일때 보이기
    } else {
      mku_mob.parentElement.style.display = 'none'; // 부모 요소가 거짓일때 숨기기
    };

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

    prj_desc.textContent = select_data.detail || ''; // 참이면 detail을, 거짓이면 (값 없음) 출력
  }
// );
// });

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

// 실행
document.addEventListener('DOMContentLoaded', () => {
  prjlist();
  setlist();
});



// 이미지 및 정보 불러와서 출력 : 사용 안 한 수정된 skill.js 참고(data.js의 이미지 불러오기, GPT 이용한)

// 탭 메뉴 필터링 : 0306 수업 참고(jQuery -> JS) : GPT 도움
// 모달 팝업창 내용 수정 : GPT 도움
// data 폴더의 리스트 내용 출력 및 기타 내용 다듬기 : GPT 도움