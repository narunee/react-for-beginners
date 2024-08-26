import { useState, useEffect } from "react";

function Hello() {
  // function destroyedFn() {
  //   console.log("destroyed");
  // }
  // function effectFn() {
  //   console.log("created");
  //   return destroyedFn; //cleanup , 컴포넌트가 destroyed 될 때 작동
  // }
  // useEffect(effectFn, []);

  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
