import { useEffect, useRef } from "react";
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

const ACCENT_HUES = [199, 265, 152, 32, 280, 12, 43, 145, 210, 318];

const Module = () => {
  const cardRefs = useRef([]);

  const skills = [
    {
      name: "NodeJS",
      details: "Fast, scalable server-side runtime for real-time web applications.",
      image: nodeLogo,
      category: "Backend",
    },
    {
      name: "ReactJS",
      details: "Component-based UI library for building dynamic web apps.",
      image: reactLogo,
      category: "Frontend",
    },
    {
      name: "Docker",
      details: "Containerization platform for consistent and portable deployment.",
      image: dockerLogo,
      category: "DevOps",
    },
    {
      name: "ExpressJS",
      details: "Minimalist Node.js framework for APIs and web applications.",
      image: expressLogo,
      category: "Backend",
    },
    {
      name: "Ubuntu/Linux",
      details: "Reliable open-source OS for development and deployment.",
      image: ubuntuLogo,
      category: "Platform",
    },
    {
      name: "Git",
      details: "Distributed version control system for collaboration and tracking.",
      image: gitLogo,
      category: "Workflow",
    },
    {
      name: "Laravel",
      details: "Elegant PHP framework with powerful built-in tools for rapid dev.",
      image: laravelLogo,
      category: "Backend",
    },
    {
      name: "MongoDB",
      details: "NoSQL database storing data in flexible, JSON-like format.",
      image: mongoLogo,
      category: "Database",
    },
    {
      name: "MySQL",
      details: "Relational database for structured data storage and queries.",
      image: mysqlLogo,
      category: "Database",
    },
    {
      name: "Redux",
      details: "Predictable state management for scalable JavaScript apps.",
      image: reduxLogo,
      category: "State",
    },
  ];

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return undefined;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 36, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: { each: 0.055, from: "start" },
          clearProps: "transform",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.module_main_container}>
      <div className={styles.backdropGlow} aria-hidden />
      <h1 className={styles.moduleTitle}>Tech Stack & Tools</h1>
      <p className={styles.moduleSubtitle}>
        A snapshot of the languages, frameworks, and platforms I build and ship with.
      </p>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <article
            key={skill.name}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={styles.card}
            style={{
              "--accent": `hsl(${ACCENT_HUES[index % ACCENT_HUES.length]}, 70%, 58%)`,
              "--accent-soft": `hsla(${ACCENT_HUES[index % ACCENT_HUES.length]}, 65%, 55%, 0.22)`,
            }}
          >
            <div className={styles.cardGlow} aria-hidden />
            <div className={styles.cardBody}>
              <div className={styles.iconWrap}>
                <img src={skill.image} alt="" className={styles.cardImage} />
              </div>
              <span className={styles.skillTag}>{skill.category}</span>
              <h3 className={styles.skillname}>{skill.name}</h3>
              <p className={styles.skillDetails}>{skill.details}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Module;
