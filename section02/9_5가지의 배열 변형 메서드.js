// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환
let arr1 = [
  { name: "minsu", hobby: "study" },
  { name: "mansoo", hobby: "study" },
  { name: "niceman", hobby: "run" },
];

const studyPeople = arr1.filter((item) => {
  if (item.hobby === "study") return true;
});

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item, idx, arr) => {
  return item.name;
});

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["B", "A", "C"];
arr3.sort();

let num3 = [10, 5, 3, 2, 3, 4];
num3.sort((a, b) => {
  if (a > b) {
    // b가 앞으로 와라
    return 1; /// b, a 배치
  } else if (a < b) {
    //a가 b앞으로 와라
    return -1; /// a, b 배치
  } else {
    //두 값의 자리를 바꾸지 마라
    return 0; /// a, b 자리 그대로 유지
  }
});

// 4. toSorted
// sort는 원본 배열을 정렬하는데 toSorted는 원본 배열을 놔두고 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ["b", "a", "c"];
const toSortedResult = arr4.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr5 = ["hello", "world"];
const joined = arr5.join("-");
console.log(joined);
