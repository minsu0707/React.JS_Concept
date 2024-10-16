import { Register } from "./components/Register";

function App() {
  // const ButtonProps = {
  //   text: "카페",
  //   color: "red",
  // };

  return (
    <>
      {/* <Button {...ButtonProps} />
      <Button text={"메일"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button> */}
      <Register />
      <Register />
    </>
  );
}

export default App;
