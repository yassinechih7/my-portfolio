import React from "react";
import SkillCard from "./SkillCard";
import Image from "next/image";

import styles from "./Skills.module.css";
import { penwb, loopwb, lockwb, truckwb } from "./ImgesImport";

function Skills() {
  const SkillsData = [
    [
      penwb,
      "Python",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      loopwb,
      "NodeJs",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      truckwb,
      "ReactJS",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      lockwb,
      "Linux",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      penwb,
      "Html5 & CSS3",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      loopwb,
      "SQL NoSQL Databases",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      truckwb,
      "GIT & version controle",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
    [
      lockwb,
      "Ethical hacking",
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    ],
  ];
  return (
    <div className={styles.Skills}>
      <div className={styles.minTitle}>My Skills</div>
      <div className={styles.mainTitle}>
        Creativity is nothing but the way to
        <br />
        solve new problems.
      </div>
      <div className={styles.SkillsCards}>
        {SkillsData.map((e, eIndex) => (
          <SkillCard key={eIndex} icon={e[0]} title={e[1]} text={e[2]} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
