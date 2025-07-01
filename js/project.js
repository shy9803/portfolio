/*
  // 구상
  우측 이미지 클릭 -> 좌측에 해당 이미지 보여줌 (pc, tablet, mobile 각 다르게)
  하단의 해당 내용도 보여줌.
  옆에 해당되는 상세보기 링크, 모달 생성.

  // 추후 우측 이미지도 별도의 data로 관리
*/

const ptf_list = document.querySelectorAll('.prj_r_list > picture > img'); // 리스트 이미지
const mku_pc = document.querySelector('.mku_pc > picture > img'); // PC 크기의 이미지 바구니
const mku_tab = document.querySelector('.mku_tab > picture > img'); // Tablet 크기의 이미지 바구니
const mku_mob = document.querySelector('.mku_mob > picture > img'); // Mobile 크기의 이미지 바구니


// 각 이미지를 클릭할 때
ptf_list.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item);

    const img_src = './images/project_img/';
    const img_name_pc = item.pc;
    const img_name_tab = item.tablet;
    const img_name_mob = item.mobile;
    console.log(img_name_pc, img_name_tab, img_name_mob);

    const ptf_img_pc = img_src + img_name_pc; // 이미지 경로 결합(PC)
    const ptf_img_tab = img_src + img_name_tab; // 이미지 경로 결합(Tablet)
    const ptf_img_mob = img_src + img_name_mob; // 이미지 경로 결합(Mobile)

    mku_pc.src = ptf_img_pc;
  });
});