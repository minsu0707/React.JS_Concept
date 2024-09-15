// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자

let date2 = new Date("1997/01/07/10:10:10");

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// -> 여기서 UTC: 세계의 모든 나라가 표준으로 하는 사용하는 시간이 시작되는 지점
let ts1 = date1.getTime();

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // getMonth 메서드는 월을 0부터 시작함 ex) 1월: 0월
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
