import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Viewer } from "./components/Viewer";
import { Controller } from "./components/Controller";
import { Even } from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  const onClickButton = (value) => {
    setCount(count + value); // 리액트의 state는 비동기로 업데이트가 되기 때문에
    //우리가 변경된 스테이트의 값을 바로 사용해서 무언가 Side Effect에 해당하는 부가적인 작업을 진행하려면
    //이렇게 하면 안됨
  };

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // -> 두 번째 인수인 deps는 생략

  // 3. 언마운트 : 죽음

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
