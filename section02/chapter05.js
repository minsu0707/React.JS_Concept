// 원시 타입과 객체 타입
let o1 = { name: "front_developer" }; // 얇은 복사
let o2 = { ...o1 }; // 깊은 복사
o2.name = "minsu";

console.log(o2);
