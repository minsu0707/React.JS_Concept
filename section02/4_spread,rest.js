// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
// funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
  // ...rest는 배열 형태
  // ...rest는 매개변수를 정의하는 공간인 소괄호 안에 사용되었기 때문에 Spread 연산자가 아니라 Rest 매개변수임
  console.log(rest);
}

funcB(...arr1);

function funcC(one, ...rest) {
  // rest 매개변수 뒤에는 추가적으로 매개변수를 선언할 수가 없음
  console.log(rest);
}

function funcD(...rest) {
  console.log(rest);
}

funcD(obj2);
