import React from "react";
import Image from "next/image";
import styles from "./SkillCard.module.css";

function SkillCard(props) {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.cardImage}>
        <Image src={props.icon} alt={props.title} />
      </div>

      <div className={styles.SkillCardContentWrapper}>
        <div className={styles.cardTitle}>{props.title}</div>
        <div className={styles.cardText}>{props.text}</div>
      </div>
    </div>
  );
}

export default SkillCard;
