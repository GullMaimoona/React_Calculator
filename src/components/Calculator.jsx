import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
  }
  else if ( value === "="){
    setInput (eval(input));
  }
    else {
        setInput (input + value);
    }
}
  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn) => (
          <Button key={btn} text={btn} onClick={handleClick} />
        ))}
        <Button text="C" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;