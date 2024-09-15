// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
  // console.log("funcB");
};
varB();
// funcB(); 이 함수는 그냥 값으로 함수가 생성된 것이기 때문에 이렇게 호출이 불가능함

// let varB = function () {  함수 이름 생략 가능(익명 함수)
//   console.log("funcB");
// };

// 2. 화살표 함수
let varC = () => {
  return 1;
};
// let varC = () => 1; 반환하기만 하는 함수면 이렇게 작성 가능
let varD = (value) => value + 1;
// console.log(varD(10));

let varE = (inputValue) => {
  console.log(inputValue);
  return inputValue + 100;
};
console.log(varE(10));
