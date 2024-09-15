// 1. 상수 객체
const girl = {
  type: "외계인",
  name: "원이",
  color: "green",
};

girl.age = 17; // 추가
girl.name = "하원"; // 수정
delete girl.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "만두",
  // 메서드 선언 (객체의 동작을 정의함)
  sayHi: () => {
    console.log("Hi");
  },
};

person.sayHi();
person["sayHi"]();
