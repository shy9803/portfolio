/* -- 스크롤 이벤트 효과 -- */

// 스크롤 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const handle_scroll = () => {
    const scroll_y = window.scrollY;

    sections.forEach(section => {
      const section_top = section.offsetTop; // 상단 위치
      const section_height = section.offsetHeight; // 높이

      // 해당 section이 뷰포트에 들어왔는지 확인
      if (scroll_y + window.innerHeight > section_top + 100 && scroll_y < section_top + section_height) { // A && B 조건 만족할 때
        section.classList.add('view');
      } else {
        section.classList.remove('view');
      }
    });
  }

  window.addEventListener('scroll', handle_scroll);
  handle_scroll(); // 초기 실행
});

// IntersectionObserver API 사용
/* document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

   const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); // 한 번만 실행할 경우
       } else {
        entry.target.classList.remove('active'); // 사라질 때 효과 제거하려면 사용
      }
     });
   }, {
    threshold: 0.2 // 20% 보이면 작동
  });

  sections.forEach(section => observer.observe(section));
}); */

// GPT 도움