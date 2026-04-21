import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./index.module.css";
import wotgSocial from "./wotg_social.webp";
import rptgen from "./rptgen.webp";
import margaAccounting from "./marga_accounting.webp";
import wotgAdmin from "./wotg_admin.webp";
import garbia from "./garbia.webp";

const ACCENT_HUES = [210, 265, 175, 32, 330];

const projects = [
  {
    title: "WOTG Online Community",
    description:
      "A full-featured social platform for WOTG Church that includes devotion feeds, music playlists, real-time chat, Bible access, and live worship streaming — all in one connected digital space.",
    image: wotgSocial,
    type: "Social Platform",
  },
  {
    title: "WOTG Online Community Admin",
    description:
      "An intuitive admin console for managing users, content, announcements, and live events. Features role-based access, content moderation tools, and community activity oversight.",
    image: wotgAdmin,
    type: "Admin Portal",
  },
  {
    title: "Marga Enterprises Accounting System",
    description:
      "A custom accounting platform that automates sales tracking, billing, payroll, inventory, collection, and financial reporting — streamlining end-to-end business workflows.",
    image: margaAccounting,
    type: "Business System",
  },
  {
    title: "Rptgen",
    description:
      "A report-generation system for clinics and diagnostic centers, offering automated report creation, patient record management, secure access, and real-time data viewing.",
    image: rptgen,
    type: "Healthcare Tool",
  },
  {
    title: "Garbia SGS",
    description:
      "A company website showcasing geotechnical, structural, and soil testing services — presenting laboratory capabilities, project portfolio, and engineering expertise with a clean and professional interface.",
    image: garbia,
    type: "Corporate Website",
  },
];

const Portfolio = () => {
  const cardRefs = useRef([]);

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
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: { each: 0.08, from: "start" },
          clearProps: "transform",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backdropGlow} aria-hidden />
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.subtitle}>
        Web applications and systems built end to end — where solid engineering meets clear product
        thinking.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article
            key={project.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={styles.card}
            style={{
              "--accent": `hsl(${ACCENT_HUES[index % ACCENT_HUES.length]}, 68%, 56%)`,
              "--accent-soft": `hsla(${ACCENT_HUES[index % ACCENT_HUES.length]}, 60%, 50%, 0.18)`,
            }}
          >
            <div className={styles.cardGlow} aria-hidden />
            <div className={styles.cardInner}>
              <div className={styles.media}>
                <img src={project.image} alt="" className={styles.image} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.indexMark} aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.projectTag}>{project.type}</span>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
