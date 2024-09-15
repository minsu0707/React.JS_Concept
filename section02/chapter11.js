// 동기 & 비동기
// 자바스크립트 엔진은 동기임
// 쓰레드는 하나

// 비동기화
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
setTimeout(() => {
  console.log(4);
}, 1000);
console.log(3);

// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIS에서 실행됨
// -> Web APIS: 웹 브라우저가 직접 관리하는 별도의 영역
