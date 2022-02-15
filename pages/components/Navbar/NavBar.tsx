import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        <h1>Yassine Chih</h1>
      </div>

      <div className={styles.navigationList}>
        <div className={styles.mainList}>
          <ul>
            <li>
              <Link href="#hashid">
                <a>About me</a>
              </Link>
            </li>
            <li>
              <Link href="#hashid">
                <a>Skillset</a>
              </Link>
            </li>
            <li>
              <Link href="#hashid">
                <a>Technologies</a>
              </Link>
            </li>
            <li>
              <Link href="#hashid">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.secList}>
          <ul>
            <li>Portfolio</li>
            <li>
              <Link href="#hashid">
                <Button text="contact me" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.hamburgerMenu}>
        <input className={styles.menuToggle} type="checkbox" />
        <label className={styles.menuBtn} htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className={styles.menuBox}>
          <li>
            <a className={styles.menuItem} href="#">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
