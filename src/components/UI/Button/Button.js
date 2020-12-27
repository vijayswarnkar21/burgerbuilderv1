import React from "react";
import "./Button.css";

const button = (props) => {
  let classStr = `Button ${props.btnType}`;

  return (
    <button
    className = {classStr}
    onClick={props.clicked}
  >
    {props.children}
  </button>
  )

};

export default button;
