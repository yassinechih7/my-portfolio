import React from "react";
import SkillCard from "./SkillCard";
import styles from "./MainSkillset.module.css";
import { lock, links, house } from "./ImgesImport";

function MainSkillset() {
  const MainSkillsetData = [
    [
      house,
      "Front end development",
      "Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.",
    ],
    [
      links,
      "Back end development",
      "Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.",
    ],
    [
      lock,
      "Ethical Hacking",
      "Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.",
    ],
  ];

  return (
    <div className={styles.MainSkillset}>
      <div className={styles.mainTitle}>
        <h2>Main Skillset</h2>
      </div>
      <div className={styles.subTitle}>
        Skills that’s i have picked up durring my learning journey
      </div>

      <div className={styles.MainSkillsetCards}>
        {MainSkillsetData.map((e, eIndex) => (
          <SkillCard key={eIndex} icon={e[0]} title={e[1]} text={e[2]} />
        ))}
      </div>
    </div>
  );
}

export default MainSkillset;
