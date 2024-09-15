// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // 첫 번째 매개변수: 현재 순회중인 배열의 요소
  // 두 번째 매개변수: 현재 요소의 인덱스
  // 세 번째 매개변수: 전체 배열 자체
  // console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});
// console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let included = arr2.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// indexOf는 원시 타입의 값이 들어있을 때가 아니라 객체 타입의 값들이 저장된 배열에서는 요소의 정확한 위치를 찾을 수가 없음
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findeIndex = arr4.findIndex((item) => {
  if (item !== 0) return true;
});
// console.log(findeIndex);

let objecArr = [{ name: "minsu" }, { age: 17 }];

// console.log(
//   objecArr.findIndex((item) => {
//     return item.name;
//   })
// );

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "minsu" }, { name: "mandoo" }];
const findItem = arr5.find((item) => {
  return item.name === "minsu";
});
