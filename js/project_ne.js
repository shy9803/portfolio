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
const prj_modal_info = document.querySelector('.prj_modal_info');
const prj_link = prj_modal_info.querySelector('a');
const prj_desc = prj_modal_info.querySelector('p');

// 프로젝트 탭 메뉴 및 리스트
const prj_mnu_btn = document.querySelectorAll('.prj_r_mnu > button'); // 탭 메뉴
const prj_list = document.querySelectorAll('.prj_r_list'); // 리스트
const prj_list_img = document.querySelectorAll('.prj_r_list > picture > img'); // 리스트 이미지


/* --- 함수 작성 --- */
// // 각 이미지를 클릭할 때
// prj_list_img.forEach(item => {
//   item.addEventListener('click', () => {
//     // console.log(item);

//     // 이미지 가져와 출력
//     const elements = mku_mockup.querySelectorAll('[data-key]'); // data-key의 pc, tablet, mobile값 저장
//     // console.log(elements);

//     elements.forEach(el => { // 각 클릭시
//       const key = el.dataset.key;
//       const value = select_data[key]; // key에 포함된 이미지 전체
//       // console.log(key, value);

//     });

//   });
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

// 탭 메뉴 필터링
prj_mnu_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    prj_mnu_btn.forEach(b => b.classList.remove('actmnu'));
    btn.classList.add('actmnu');

    const filter = btn.dataset.type;

    prj_list_img.forEach(item => {
      const item_type = item.dataset.type;

      if(filter === 'all' || item_type === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 상세정보 함수
function show_detail(data) {
  // 이미지 경로 설정
  const img_src = './images/project_img/';

  if(!select_data) return;

  // 기존 이미지 제거
  mku_pc.innerHTML = '';
  mku_tab.innerHTML = '';
  mku_mob.innerHTML = '';

  // PC 이미지
  if (data.pc) { // 참일 경우
    const img = document.createElement('img'); // img태그 생성
    img.src = img_src + data.pc; // PC 이미지 경로 결합
    img.alt = `${data.name} pc`;
    mku_pc.appendChild(img); // 이미지 태그 삽입
  }
  // tablet 이미지
  if (data.tablet) { // 참일 경우
    const img = document.createElement('img'); // img태그 생성
    img.src = img_src + data.tablet; // Tablet 이미지 경로 결합
    img.alt = `${data.name} tablet`;
    mku_tab.appendChild(img); // 이미지 태그 삽입
    mku_tab.parentElement.style.display = 'block'; // 부모요소가 참일때 보이기
  } else {
    mku_tab.parentElement.style.display = 'none'; // 부모요소가 거짓일때 숨기기
  }
  // mobile 이미지
  if (data.mobile) { // 참일 경우
    const img = document.createElement('img'); // img태그 생성
    img.src = img_src + data.mobile; // 이미지 경로 결합 PC
    img.alt = `${data.name} mobile`;
    mku_mob.appendChild(img); // 이미지 태그 삽입
    mku_mob.parentElement.style.display = 'block'; // 부모요소가 참일때 보이기
  } else {
    mku_mob.parentElement.style.display = 'none'; // 부모요소가 거짓일때 숨기기
  }

  // 정보 가져와 출력
  const elements_info = prj_info.querySelectorAll('[data-key]');
  // console.log(elements_info);

  elements_info.forEach(el => {
    const key = el.dataset.key;

    if(data[key]) {
      el.textContent = data[key];
    }
  });

  // 이미지별 모달 내용 변경
  // 해당 정보의 모달 팝업창 내용 변경
    prj_link.href = data.plan || '#';
    prj_link.style.display = data.plan ? 'inline' : 'none'; // 보이거나 숨기기
    prj_desc.textContent = data.detail || '';
}

// 리스트 렌더링
function render_list(filterd) {
  prj_list.innerHTML = '';

  filterd.forEach(project => {
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    img.src = './images/project_img/' + project.pc;
    img.alt = project.name;
    picture.appendChild(img);
    prj_list.appendChild(picture);

    // 클릭시 상세 정보
    img.addEventListener('click', () => show_detail(project));
  });

  // 자동으로 첫 항목 표시
  if(filterd.length > 0) {
    show_detail(filterd[0]);
  }
}

// 이미지 및 정보 불러와서 출력 : 사용 안 한 수정된 skill.js 참고(data.js의 이미지 불러오기, GPT 이용한)
// 탭 메뉴 필터링 : 0306 수업 참고(jQuery -> JS) -> GPT 도움
// 모달 팝업창 내용 수정 : GPT 도움