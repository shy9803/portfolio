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

// 페이지네이션
function get_item_per_page() { // 한 페이지에 보여줄 프로젝트 수(반응형 변화)
  const width = window.innerWidth;

  if(width >= 1024) return 6; // PC(데스크탑)
  else if(width >= 768) return 3; // Tablet
  else return 1; // Mobile
}
let current_page = 1; // 현재 페이지 번호
let current_filter = 'all'; // 필터 기본값

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

// 필터링 페이지네이션
function filter_project() {
  if(current_filter === 'all') return project;

  return project.filter(prj => {
    const type = normal_skill(prj.skill);  // 필터 버튼 타입 (ex. html+css)
    return type.includes(current_filter); // 필터 조건 포함 여부
  });
}

// 리스트 목록 불러와 출력하기 + 페이지네이션 기능 추가
function prjlist(page = 1) {
  // 페이지네이션 기능
  const items_per_page = get_item_per_page(); // 한 페이지에 보여줄 프로젝트 수 호출
  const filtered = filter_project();

  prj_list_ul.innerHTML = ''; // 기존 리스트 초기화

  const start = (page - 1) * items_per_page; // 시작
  const end = start + items_per_page; // 마지막
  const slice_project = filtered.slice(start, end); // 해당 페이지 범위만 추출

  // 페이지 범위에 맞는 반복문으로 수정
  slice_project.forEach(prj => {
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

  setlist(); // 새로 삽입된 이미지에 이벤트 재설정
}

// 페이지네이션 UI 생성 함수
function create_pagination() {
  const items_per_page = get_item_per_page(); // 프로젝트 수 호출
  const filtered = filter_project();

  const total_pages = Math.ceil(filtered.length / items_per_page); // 전체 페이지 수 계산
  const pagination_wrap = document.querySelector('.pagination'); // 페이지네이션 영역
  if(!pagination_wrap) return;

  pagination_wrap.innerHTML = ''; // 기존 페이지 버튼 제거

  // 처음으로 이동 버튼
  const first_btn = document.createElement('button');
  first_btn.type = 'button';
  first_btn.className = 'pgn_btn';
  first_btn.textContent = '«';
  first_btn.disabled = current_page === 1;
  first_btn.addEventListener('click', () => {
    if(current_page !== 1) {
      current_page = 1;
      prjlist(current_page); // 리스트 페이지네이션 생성
      create_pagination(); // 페이지네이션 재정비
    }
  });
  pagination_wrap.appendChild(first_btn);

  // 이전 버튼 생성
  const prev_btn = document.createElement('button');
  prev_btn.type = 'button';
  prev_btn.className = 'pgn_btn nxpv_btn';
  prev_btn.textContent = '◀';
  prev_btn.disabled = current_page === 1; // 현재 페이지 번호가 1일때, 버튼 비활성화
  prev_btn.addEventListener('click', () => {
    if(current_page > 1) {
      current_page--;
      prjlist(current_page);
      create_pagination();
    }
  });
  pagination_wrap.appendChild(prev_btn);

  // 페이지 번호 제한
  const max_display = 3; // 최대 페이지 번호 버튼 수
  let start_page = Math.max(1, current_page - 1);
  let end_page = Math.min(total_pages, start_page + max_display - 1);

  // 끝에서 5개만 나오도록 보정
  if(end_page - start_page + 1 < max_display) {
    start_page = Math.max(1,end_page - max_display + 1);
  }

  // 페이지 번호 버튼 생성
  for(let i = start_page; i <= end_page; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = i;
    btn.classList.toggle('active', i === current_page); // 토글시 활성화 서식 적용

    btn.addEventListener('click', () => {
      current_page = i;
      prjlist(current_page);
      create_pagination();
    });

    pagination_wrap.appendChild(btn);
  }

  // 다음 버튼 생성
  const next_btn = document.createElement('button');
  next_btn.type = 'button';
  next_btn.className = 'pgn_btn nxpv_btn';
  next_btn.textContent = '▶';
  next_btn.disabled = current_page === total_pages; // 현재 페이지가 마지막 번호일 때, 버튼 비활성화
  next_btn.addEventListener('click', () => {
    if(current_page < total_pages) {
      current_page++;
      prjlist(current_page);
      create_pagination();
    }
  });
  pagination_wrap.appendChild(next_btn);

  // 마지막으로 이동 버튼
  const last_btn = document.createElement('button');
  last_btn.type = 'button';
  last_btn.className = 'pgn_btn';
  last_btn.textContent = '»';
  last_btn.disabled = current_page === total_pages || total_pages === 0;
  last_btn.addEventListener('click', () => {
    if(current_page !== total_pages) {
      current_page = total_pages;
      prjlist(current_page);
      create_pagination();
    }
  });
  pagination_wrap.appendChild(last_btn);
}

// 화면 크기 변경시 반응형 재적용
window.addEventListener('resize', () => {
  current_page = 1;
  prjlist(current_page);
  create_pagination();
});

// 탭 필터링 + 이미지 클릭 시 상세 정보 표시 기능
function setlist() {
  const prj_list_img = document.querySelectorAll('.prj_r_list li > picture > img'); // 리스트 이미지

  // 탭 메뉴 필터링
  prj_mnu_btn.forEach(btn => {
    btn.addEventListener('click', () => {
      prj_mnu_btn.forEach(b => b.classList.remove('actmnu')); // 활성화 서식 제거
      btn.classList.add('actmnu'); // 활성화 서식 적용
      
      current_filter = btn.dataset.type; // 탭 메뉴 필터의 data-type을 변수 저장
      current_page = 1; // 페이지 초기화, 필터 변경시
  
      prjlist(current_page); // 페이지번호
      create_pagination(); // 페이지네이션 재생성
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

  // 참이면 detail을, 거짓이면 (값 없음) 
  prj_desc.innerHTML = ''; // 기존 내용 초기화
  
  if(select_data.detail) {
    const pic = document.createElement('picture');
    const img = document.createElement('img');

    img.src = './images/project_img/' + select_data.detail;
    img.alt = select_data.name;
    
    pic.appendChild(img);
    prj_desc.appendChild(pic);
  } else {
    prj_desc.textContent = '';
  }
}

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

// 실행 (페이지 로딩시)
document.addEventListener('DOMContentLoaded', () => {
  prjlist(current_page);
  create_pagination();
});


// 이미지 및 정보 불러와서 출력 : 사용 안 한 수정된 skill.js 참고(data.js의 이미지 불러오기, GPT 이용한)

// 탭 메뉴 필터링 : 0306 수업 참고(jQuery -> JS) : GPT 도움
// 모달 팝업창 내용 수정 : GPT 도움
// data 폴더의 리스트 내용 출력 및 기타 내용 다듬기 : GPT 도움
// 리스트의 페이지네이션: GPT 도움