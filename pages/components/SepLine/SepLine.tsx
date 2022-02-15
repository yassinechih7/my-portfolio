import React from "react";
import styles from "./SepLine.module.css";

function SepLine(props) {
  return (
    <div className={styles.SepLine}>
      <hr style={{ width: props.width + "%" }} />
    </div>
  );
}

export default SepLine;
