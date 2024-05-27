import React from "react";
import styles from "./EducationCard.module.css";

export const EducationCard = ({ education: { degree, institution, year,course, imageSrc } }) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${institution}`}
        className={styles.image}
      />
      <h3 className={styles.degree}>{degree}</h3>
      <p className={styles.institution}>{institution}</p>
      <p className={styles.course}>{course}</p>
      <p className={styles.year}>{year}</p>
    </div>
  );
};
