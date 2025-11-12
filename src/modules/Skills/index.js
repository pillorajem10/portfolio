import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./index.module.css";

import gitLogo from "./images/git.webp";
import laravelLogo from "./images/logoLaravel.webp";
import mongoLogo from "./images/mongo.webp";
import mysqlLogo from "./images/msqlLogo.webp";
import dockerLogo from "./images/docker.webp";
import nodeLogo from "./images/node.webp";
import reactLogo from "./images/react.webp";
import reduxLogo from "./images/redux.webp";
import ubuntuLogo from "./images/ubuntu1.webp";
import expressLogo from "./images/expressLogo.webp";

const Module = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);

  const skills = [
    { name: "NodeJS", details: "Fast, scalable server-side runtime for real-time web applications.", image: nodeLogo },
    { name: "ReactJS", details: "Component-based UI library for building dynamic web apps.", image: reactLogo },
    { name: "Docker", details: "Containerization platform for consistent and portable deployment.", image: dockerLogo },
    { name: "ExpressJS", details: "Minimalist Node.js framework for APIs and web applications.", image: expressLogo },
    { name: "Ubuntu/Linux", details: "Reliable open-source OS for development and deployment.", image: ubuntuLogo },
    { name: "Git", details: "Distributed version control system for collaboration and tracking.", image: gitLogo },
    { name: "Laravel", details: "Elegant PHP framework with powerful built-in tools for rapid dev.", image: laravelLogo },
    { name: "MongoDB", details: "NoSQL database storing data in flexible, JSON-like format.", image: mongoLogo },
    { name: "MySQL", details: "Relational database for structured data storage and queries.", image: mysqlLogo },
    { name: "Redux", details: "Predictable state management for scalable JavaScript apps.", image: reduxLogo },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 495);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      cardRefs.current.forEach((card) => {
        const inner = card.querySelector(`.${styles.cardInner}`);
        gsap.set(inner, { rotationY: 0, transformOrigin: "center center" });

        card.addEventListener("mouseenter", () => {
          gsap.to(inner, {
            rotationY: 180,
            duration: 0.6,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(inner, {
            rotationY: 0,
            duration: 0.6,
            ease: "power2.inOut",
          });
        });
      });
    }
  }, [isMobile]);

  return (
    <div className={styles.module_main_container}>
      <h1 className={styles.moduleTitle}>Tech Stack & Tools</h1>
      <p className={styles.moduleSubtitle}>
        Hover over each card to see what powers my development process.
      </p>

      <div className={styles.skillsFlexContainer}>
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={styles.card}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={skill.image} alt={skill.name} className={styles.cardImage} />
                <h3 className={styles.skillname}>{skill.name}</h3>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.skillDetails}>{skill.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module;
