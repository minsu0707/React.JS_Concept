// Promis

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  // setTimeout(() => {
  //   console.log("안녕!");
  //   resolve("Hi");
  // }, 2000);
  // setTimeout(() => {
  //   console.log("안녕");
  //   reject("왜 오류나는지 이유좀...");
  // }, 2000);
});
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = null;

//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 2000);
// });

// then 메서드
// -> 그 후에
// promise의 비동기 작업이 성공했을 때만 호출되는 그런 메서드
// promise2
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// -> 이렇게 then, catch를 연달아 사용하는 것을 Promise Chaining이라고 표현함

// catch 메서드
// -> 실패 버전의 then 메서드

// promise2.catch((error) => {
//   console.log(error);
// });

function add10(num) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise3;
}

// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });
// 위 코드랑 실행결과는 같음 -> 하지만 promise가 제공하는 엄청난 기능으로 수정하면

add10(0)
  .then((result) => {
    console.log(result);

    return add10(undefined);
  })
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
