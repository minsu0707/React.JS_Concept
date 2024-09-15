// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let srt2 = "10개";
let strToNum2 = parseInt(srt2);

// -> 숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1);
console.log(numTostr1);
