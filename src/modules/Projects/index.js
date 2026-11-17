import { useRef } from "react";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import useTilt from "../../hooks/useTilt";
import styles from "./index.module.css";
import wotgSocial from "./wotg_social.webp";
import rptgen from "./rptgen.webp";
import margaAccounting from "./marga_accounting.webp";
import wotgAdmin from "./wotg_admin.webp";
import garbia from "./garbia.webp";

const projects = [
  {
    title: "WOTG Online Community",
    description:
      "A full-featured social platform for WOTG Church that includes devotion feeds, music playlists, real-time chat, Bible access, and live worship streaming — all in one connected digital space.",
    image: wotgSocial,
    type: "Social Platform",
    features: ["Devotion feeds", "Music playlists", "Real-time chat", "Bible access", "Live worship"],
    hue: 210,
  },
  {
    title: "WOTG Online Community Admin",
    description:
      "An intuitive admin console for managing users, content, announcements, and live events. Features role-based access, content moderation tools, and community activity oversight.",
    image: wotgAdmin,
    type: "Admin Portal",
    features: ["Role-based access", "Content moderation", "Announcements", "Live events"],
    hue: 265,
  },
  {
    title: "Marga Enterprises Accounting System",
    description:
      "A custom accounting platform that automates sales tracking, billing, payroll, inventory, collection, and financial reporting — streamlining end-to-end business workflows.",
    image: margaAccounting,
    type: "Business System",
    features: ["Sales & billing", "Payroll", "Inventory", "Collections", "Financial reports"],
    hue: 175,
  },
  {
    title: "Rptgen",
    description:
      "A report-generation system for clinics and diagnostic centers, offering automated report creation, patient record management, secure access, and real-time data viewing.",
    image: rptgen,
    type: "Healthcare Tool",
    features: ["Automated reports", "Patient records", "Secure access", "Real-time viewing"],
    hue: 32,
  },
  {
    title: "Garbia SGS",
    description:
      "A company website showcasing geotechnical, structural, and soil testing services — presenting laboratory capabilities, project portfolio, and engineering expertise with a clean and professional interface.",
    image: garbia,
    type: "Corporate Website",
    features: ["Lab capabilities", "Project portfolio", "Engineering services"],
    hue: 330,
  },
];

const ProjectCard = ({ project, index }) => {
  const frameRef = useRef(null);
  useTilt(frameRef, { max: 5, scale: 1.015, perspective: 1100 });

  return (
    <Reveal
      as="article"
      className={`${styles.card} ${index % 2 ? styles.flip : ""}`}
      style={{ "--hue": project.hue }}
    >
      <div className={styles.media}>
        <div ref={frameRef} className={styles.frame} data-spotlight>
          <div className={styles.chrome}>
            <span className={styles.dots} aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.url}>{project.title}</span>
          </div>
          <div className={styles.shot}>
            <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            <div className={styles.shotOverlay} aria-hidden />
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <span className={styles.index} aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={styles.type}>{project.type}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.features}>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Portfolio = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Products I've built"
        highlight="end to end"
        subtitle="Web applications and systems where solid engineering meets clear product thinking."
      />

      <div className={styles.list}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
