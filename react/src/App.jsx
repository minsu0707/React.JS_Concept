import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

function App() {
  const ButtonProps = {
    text: "카페",
    color: "red",
  };

  return (
    <>
      <Button {...ButtonProps} />
      <Button text={"메일"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
