// 주의 상황
// 1. 중괄호 내부에는 JS 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
export const Main = () => {
  const User = {
    name: "minsu",
    isLogin: true,
  };

  if (User.isLogin) {
    return (
      <div style={{ backgroundColor: "red", borderBottom: "5px solid black" }}>
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  // return <>{User.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};
