import React from "react";
import styles from "./Education.module.css";
import { EducationCard } from "./EducationCard";
import education from "../../data/education.json";


export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.education}>
        {education.map((education, id) => (
          <EducationCard key={id} education={education} />
        ))}
      </div>
    </section>
  );
};
