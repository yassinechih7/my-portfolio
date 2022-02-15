import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { fb, ig, twitter, github } from "./ImgesImport";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.rightsText}>
        <p>© 2022 Yassine Chih</p>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <Image src={fb} alt="fb" width={50} height={50} />
          </li>
          <li>
            <Image src={twitter} alt="twitter" width={50} height={50} />
          </li>
          <li>
            <Image src={ig} alt="ig" width={50} height={50} />
          </li>
          <li>
            <Image src={github} alt="github" width={50} height={50} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
