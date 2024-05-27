import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bhamalekshmi VS</h1>
        <p className={styles.description}>
        From concept to deployment, I provide end-to-end development services, integrating various technologies to create cohesive and efficient applications.
          <p>

            Excited to take on a role that lets me leverage my skills! 
            </p>
              Reach out if you'd like to know more!
            <p>
          </p>
        </p>
        <a href="mailto:bhamalekshmivs@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
