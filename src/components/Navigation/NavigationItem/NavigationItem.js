import React from "react";
import "./NavigationItem.css";

function NavigationItem(props) {
  return (
    <li className = "NavigationItem">
      <a 
        href={props.target}
        className = {props.active ? "active" : null}>{props.children}</a>
    </li>
  );
}

export default NavigationItem;
