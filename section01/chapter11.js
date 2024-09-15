// 함수 선언

let are1 = getArea(10, 20); // 10과 20은 인수
console.log(are1);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  //width, height는 매개변수
  let area = width * height;

  return area;
}
