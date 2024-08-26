// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("run all");

  //useEffect : 코드를 한 번만 실행될 수 있도록 보호
  //[]안에 있는 변수가 변화할 때마다 코드 실행, []안에 변수 여러개 작성 가능
  useEffect(() => {
    console.log("once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <div>
      {/* <h1 className={styles.title}>welcome!</h1>
      <Button text={"continue"} /> */}

      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search"
      />
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
