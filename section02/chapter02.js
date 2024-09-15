// 1. 단락 평가
// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// // console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
// -> True || True 인 경우는 첫 번째 Truthy한 값이 반환됨
function PrintName(person) {
  let name = person && person.name;
  console.log(name || "person의 값이 없음");
}

PrintName();
PrintName({ name: "choi" });
