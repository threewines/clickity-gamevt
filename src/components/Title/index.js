import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title"><strong>{props.children}</strong></h1>;
}

export default Title;
