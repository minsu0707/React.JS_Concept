// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "minsu",
  age: 17,
  hobby: "study",
};

let { name: myName, age, hobby, extra = "hello" } = person;
// console.log(myName, age, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
