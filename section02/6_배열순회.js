// 1. 배열 순회

// 1.1 배열 인덱스
let arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
}

// 1.2 for of 반복문
for (let item of arr1) {
  // console.log(item);
}

//  2. 객체 순회
let person = {
  name: "minsu",
  age: 17,
  hobby: "movie",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
}

for (let key of keys) {
  // for of는 배열만 순회
  let value = person[key];
  // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);

for (let value of values) {
  // console.log(value);
}

// 2.3 for in
// -> for in 은 객체만 순회
for (let key in person) {
  let value = person[key];
  // console.log(key, value);
}
