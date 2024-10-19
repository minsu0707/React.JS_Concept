import { useRef, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
