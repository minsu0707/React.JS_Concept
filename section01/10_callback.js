// 1. 콜백함수
function main(value) {
  value();
}

// function sub() { // sub 함수는 콜백함수임.
//   console.log("I am sub");
// }
// main(sub);

// main(function () { // 이거도 가능
//   console.log("i am sub");
// });

main(() => {
  // console.log("I am sub");
});

// 2. 콜백함수의 실행
function repeat(value, callback) {
  for (let i = 1; i <= value; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i);
});

repeat(5, (i) => {
  console.log(i * 2);
});
