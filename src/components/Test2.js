import React, { useEffect, useState } from "react";

function Test2(props) {
  console.log("Test2 props", props);
  const [s1, setS1] = useState(props.arg);
  console.log("Test2 set state ", s1);

  const handlerButton = () => {
    console.log("Test2 handlerButton");
    let val = s1;
    val++;
    setS1(val);
  };

  useEffect(() => {                         //аналог метода didUpdate
    console.log("Test2 useEffect");
  });

  console.log("Test2 render 1");
  return (
    <>
      {console.log("Test2 render 2")}
      <div>{<button onClick={handlerButton}>push</button>}</div>
      <div>{s1}</div>
    </>
  );
}

export default Test2;
