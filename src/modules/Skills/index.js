import { useRef, useState } from "react";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import useTilt from "../../hooks/useTilt";
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

const FILTERS = ["All", "Frontend", "Backend", "Database", "DevOps & Tools"];

const SKILLS = [
  {
    name: "ReactJS",
    details: "Component-based UI library for building dynamic web apps.",
    image: reactLogo,
    category: "Frontend",
    hue: 199,
  },
  {
    name: "Redux",
    details: "Predictable state management for scalable JavaScript apps.",
    image: reduxLogo,
    category: "Frontend",
    hue: 265,
  },
  {
    name: "NodeJS",
    details: "Fast, scalable server-side runtime for real-time web applications.",
    image: nodeLogo,
    category: "Backend",
    hue: 140,
  },
  {
    name: "ExpressJS",
    details: "Minimalist Node.js framework for APIs and web applications.",
    image: expressLogo,
    category: "Backend",
    hue: 48,
  },
  {
    name: "Laravel",
    details: "Elegant PHP framework with powerful built-in tools for rapid dev.",
    image: laravelLogo,
    category: "Backend",
    hue: 8,
  },
  {
    name: "MongoDB",
    details: "NoSQL database storing data in flexible, JSON-like format.",
    image: mongoLogo,
    category: "Database",
    hue: 150,
  },
  {
    name: "MySQL",
    details: "Relational database for structured data storage and queries.",
    image: mysqlLogo,
    category: "Database",
    hue: 205,
  },
  {
    name: "Docker",
    details: "Containerization platform for consistent and portable deployment.",
    image: dockerLogo,
    category: "DevOps & Tools",
    hue: 210,
  },
  {
    name: "Ubuntu/Linux",
    details: "Reliable open-source OS for development and deployment.",
    image: ubuntuLogo,
    category: "DevOps & Tools",
    hue: 20,
  },
  {
    name: "Git",
    details: "Distributed version control system for collaboration and tracking.",
    image: gitLogo,
    category: "DevOps & Tools",
    hue: 12,
  },
];

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  useTilt(ref, { max: 7, scale: 1.03 });

  return (
    <article
      ref={ref}
      data-spotlight
      className={styles.card}
      style={{ "--hue": skill.hue }}
    >
      <div className={styles.cardBody}>
        <div className={styles.iconWrap}>
          <img src={skill.image} alt="" loading="lazy" className={styles.cardImage} />
        </div>
        <span className={styles.tag}>{skill.category}</span>
        <h3 className={styles.name}>{skill.name}</h3>
        <p className={styles.details}>{skill.details}</p>
        <span className={styles.bar} aria-hidden />
      </div>
    </article>
  );
};

const Module = () => {
  const [filter, setFilter] = useState("All");
  const visible = SKILLS.filter((s) => filter === "All" || s.category === filter);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          index="02"
          eyebrow="Tech stack"
          title="Tools I build and ship with"
          highlight="every day"
          subtitle="A snapshot of the languages, frameworks and platforms behind my work."
        />

        <Reveal>
          <div className={styles.filters} role="tablist" aria-label="Filter skills by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                className={`${styles.filter} ${filter === f ? styles.filterActive : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.grid}>
          {visible.map((skill, i) => (
            // Re-keyed per filter so cards replay their entrance animation.
            <Reveal key={`${filter}-${skill.name}`} delay={(i % 4) * 80}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Module;
