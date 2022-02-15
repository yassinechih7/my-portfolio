import React, { useState } from "react";
import styles from "./Button.module.css";

function Button(props) {
  const [buttonState, toggleButton] = useState(1);
  const [buttonMode, setButtonMode] = useState("active");
  let className = styles.Button;

  return (
    <div className={className}>
      <button
        name={props.name}
        type={props.type}
        onClick={() => {
          props.OnClick;
          if (typeof props.OnClick !== "undefined") {
            props.OnClick();
          }
          if (typeof props.onChange !== "undefined") {
            props.onChange();
          }

          buttonState ? toggleButton(0) : toggleButton(1);
          if (buttonMode == "active") {
            setButtonMode("disabled");
            className = styles.disabled;
            console.log(className);
          } else {
            setButtonMode("active");
          }
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
