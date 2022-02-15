import React from "react";
import ProjectCard from "./ProjectCard";
import project from "../../../public/1.jpg";

import styles from "./SomeProjects.module.css";

const SomeProjectsData = [
  [
    "Strapi ecommerce site",
    project,
    ["ReactJs", "ExpressJs", "MongoDB "],
    "To upgrade Dlex, you\u2019ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.",
    "https://www.figma.com/",
    "https://www.figma.com/",
  ],
  [
    "Strapi ecommerce site",
    project,
    ["ReactJs", "ExpressJs", "MongoDB "],
    "To upgrade Dlex, you\u2019ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.",
    "https://www.figma.com/",
    "https://www.figma.com/",
  ],
  [
    "Strapi ecommerce site",
    project,
    ["ReactJs", "ExpressJs", "MongoDB "],
    "To upgrade Dlex, you\u2019ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.",
    "https://www.figma.com/",
    "https://www.figma.com/",
  ],
];

function SomeProjects() {
  const isTail = (index, list) => {
    const listLength = list.length;
    return index == listLength - 1 ? true : false;
  };

  return (
    <div className={styles.SomeProjects}>
      <div className={styles.someProjectsWrapper}>
        <div className={styles.firstSection}>
          <div className={styles.TitlesWrapper}>
            <div className={styles.mainTitle}>Some of my projects</div>
            <div className={styles.secondeTitle}>Your Business</div>
          </div>

          <div className={styles.projectsDescription}>
            In my way to learn i have done many projects for fun need and
            practice here some examples
          </div>
        </div>
        <div className={styles.SomeProjectsCards}>
          {SomeProjectsData.map((e, eIndex) =>
            isTail(eIndex, SomeProjectsData) ? (
              <ProjectCard
                key={eIndex}
                title={e[0]}
                icon={e[1]}
                fList={e[2]}
                description={e[3]}
                demo={e[4]}
                source={e[5]}
              />
            ) : (
              <div key={eIndex}>
                <ProjectCard
                  title={e[0]}
                  icon={e[1]}
                  fList={e[2]}
                  description={e[3]}
                  demo={e[4]}
                  source={e[5]}
                />
                <hr className={styles.splitLine} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SomeProjects;
