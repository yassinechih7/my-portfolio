import React from "react";
import Button from "../Button/Button";
import styles from "./About.module.css";

function About() {
  const paragraphes = [
    `I start my learning journey by my self before even i reach high school
    i go against the wing when all of kids were playing flash games i was
    playing with f12 and trying to download flash games I heared of the
    power of linux so i installed it play withit that’s got me into
    hacking, electronics (script kiddie), Then i wonder how this tools is
    working so that’s got me into programming i start with python i
    learned the basics of it and having no idea how to use this power so i
    start automating some tasks (automate the boring stuff with python).`,
    `Automating tasks got me into web scraping whish makes me realise how
    stuff i have learned is used (javascript and databases) so, i decide
    to start similar projects to practice I also get into JS frameworks
    Like React NodeJS NextJS whish makes it easier to see the abstract
    view of your app wish makes it easy for maintenance and scaling all of
    that’s brought the need for system design and design pattarns for
    better quality products that’s can scale and alow mulltiple poeple to
    works on.`,
  ];
  return (
    <div className={styles.About}>
      <div className={styles.miniTtitle}>about me</div>
      <div className={styles.bigTitle}>What makes me different</div>

      <div className={styles.aboutMeText}>
        <div className={styles.p1}>
          <p>{paragraphes[0]}</p>
        </div>

        <div className={styles.p2}>
          <p>{paragraphes[1]}</p>
        </div>
      </div>

      <div className={styles.contactMeBtn}>
        <Button text={"ContactMe"} />
      </div>
    </div>
  );
}

export default About;
