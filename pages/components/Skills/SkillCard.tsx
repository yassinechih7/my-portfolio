import React from "react";
import Image from "next/image";
import styles from "./SkillCard.module.css";

function SkillCard(props) {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.CardContentWrapper}>
        <div className={styles.skillCardIcon}>
          <Image src={props.icon} alt={props.title} />
        </div>
        <div className={styles.skillCardTitle}>{props.title}</div>
        <div className={styles.skillCardText}>{props.text}</div>
      </div>
    </div>
  );
}

export default SkillCard;
