import "./Header.css";
import { memo } from "react";

export const Header = memo(() => {
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
});

// props가 변경되지 않으면 리렌더링 되지 않도록 최적화해서 반환해줌
