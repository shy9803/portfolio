const data = [
  {id: 1, name: 'html5', img:'html5.png', category: '기본', info: '가장 기본적인 언어. 대학생때부터 사용하였기에 많이 익숙한 기술.', range: '85'},
  {id: 2, name: 'css3', img:'css3.png', category: '기본', info: '가장 기본적인 서식 작성 언어. html과 마찬가지로 오랫동안 사용하였기에 익숙한 기술', range: '85'},
  {id: 3, name: 'javascript', img:'javascript.png', category: '기본', info: '가장 기본적인 언어. 잘 사용하기 위해서 꾸준하게 노력하고 있다.', range: '65'},
  {id: 4, name: 'jquery', img:'jquery.png', category: '기본', info: 'js를 간편하게 쓸 수 있는 언어로, 대학생때와 자격증 취득할 때 사용하여 비교적 쉽게 사용이 가능하다.', range: '75'},
  {id: 5, name: 'sass', img:'sass.png', category: '전처리기', info: '학원 수강하면서 학습하게 된 전처리기 언어. css 관리가 수월하게 가능하다는 장점', range: '55'},
  {id: 6, name: 'bootstrap', img:'bootstrap.png', category: '라이브러리', info: '대학교 때부터 사용한 언어로, 간편하게 클래스명만 입력하면 서식이 적용된다. 개인적으로 비선호하는 방식이다.', range: '55'},
  {id: 7, name: 'tailwindcss', img:'tailwindcss.png', category: '라이브러리', info: '학원 수강하면서 학습하게된 언어로, bootstrap처럼 클래스명만으로 서식이 적용된다. 역시 개인적으로 비선호한다.', range: '55'},
  {id: 8, name: 'react', img:'react.png', category: 'js기반', info: '학원 수강하면서 학습하게된 언어로, js를 기반으로 하며, 컴포넌트별로 구분지어 관리가 편하다는 장점.', range: '60'},
  {id: 9, name: 'nextjs', img:'nextjs.png', category: 'js기반', info: '학원 수강하면서 학습하게된 언어로, react처럼 js를 기반으로 하며, 컴포넌트별로 구분지어 관리가 편하다는 장점.', range: '58'},
  {id: 10, name: 'ajax', img:'ajax.png', category: '비동기통신', info: '비동기통신기술로, 새로고침하지 않아도 된다', range: '45'},
  {id: 11, name: 'php', img:'php.png', category: '백엔드', info: '학원 수강하면서 학습한 것, 프로젝트의 일환으로 홈페이지도 제작했다.', range: '55'},
  {id: 12, name: 'mysql', img:'mysql.png', category: '데이터베이스', info: '학원 수강하면서 학습한 것, 데이터베이스 관리', range: '55'},
  {id: 13, name: 'git', img:'git.png', category: '관리', info: '파일관리를 위한 명령어', range: '55'},
  {id: 14, name: 'github', img:'github.png', category: '관리', info: '파일 버전관리를 위한 공간', range: '55'},
  {id: 15, name: 'cloudtype', img:'cloudtype.png', category: '관리', info: 'react 등의 파일을 배포하기 위한 홈페이지, 학원 수강하며 학습', range: '55'},
  {id: 16, name: 'aws', img:'aws.png', category: '관리', info: 'react 등의 파일을 배포하기 위한 홈페이지, 학원 수강하며 학습. 하나씩 일일이 세팅해야 하고, 프론트엔드까지는 경험했다.', range: '55'},
  {id: 17, name: 'netlify', img:'netlify.png', category: '관리', info: '대학생때 학교 수업으로 홈페이지 배포할 때 사용하던 사이트, 졸업하고 독학하면서 깃허브와 연계해서 사용, react 등의 파일도 배포가 가능', range: '75'},
  {id: 18, name: 'cafe24', img:'cafe24.png', category: '쇼핑몰솔루션', info: '쇼핑몰 솔루션 사이트, 학원 수강 중 간단하게 경험', range: '55'},
  {id: 19, name: 'figma', img:'figma.png', category: 'uiux', info: '대학생때 학교에서 UI/UX 디자인 목적으로 학습했고, 지금까지도 유용하게 잘 사용하는 사이트', range: '85'},
  {id: 20, name: 'adobe_photoshop', img:'adobe_photoshop.png', category: 'design', info: '디자인과를 다니면서 많이 사용한 프로그램으로, 사진 편집이나 합성 등 가능', range: '85'},
  {id: 21, name: 'adobe_illustrator', img:'adobe_illustrator.png', category: 'design', info: '디자인과를 다니면서 학습했고, 많이 사용한 프로그램으로, 로고나 도형 등을 만들 수 있다.', range: '85'},
  {id: 22, name: 'notion', img:'notion.png', category: '문서', info: '학원 수강하면서 알게된 문서관리 사이트, 한글, 엑셀 못지않게 사용이 가능하다.', range: '75'}
]