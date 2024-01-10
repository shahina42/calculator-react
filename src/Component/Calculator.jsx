import React, { useState } from "react";
import Display from "./Display";

function Caluculator() {
  const [val, setVal] = useState(0);
  const [inp, setInp] = useState("");

  function keyclick(e) {
    if (e.target.innerHTML.length <= 3) {
      switch (e.target.innerHTML) {
        case "/":
          setInp(val + "/");
          setVal();
          break;

        case "*":
          setInp(val + "*");
          setVal();
          break;

        case "+":
          setInp(val + "+");
          setVal();
          break;
        case "-":
          setInp(val + "");
          setVal();
          break;

        case "AC":
          setInp(" ");
          setVal("");
          break;

        case "DEL":
          if (val.length > 0) {
            let newval = val.slice(0, -1);
            setVal(newval);
          }
          break;

        case "=":
          setVal(eval(inp + val));
          setInp();
          break;

        default:
          setVal(
            val == "0" || isNaN(val)
              ? e.target.innerHTML
              : val + e.target.innerHTML
          );
      }
    }
  }
  return (
    <div className="calculator">
      <Display inp={inp} val={val} />
      <div className="key" onClick={keyclick}>
        <div>AC</div>
        <div>DEL</div>
        <div>+</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>*</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>/</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>-</div>
        <div>.</div>
        <div>0</div>
        <div>=</div>
      </div>
    </div>
  );
}

export default Caluculator;