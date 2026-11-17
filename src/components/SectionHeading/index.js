import Reveal from "../Reveal";
import styles from "./index.module.css";

const SectionHeading = ({ index, eyebrow, title, highlight, subtitle, align = "left" }) => (
  <header className={`${styles.heading} ${align === "center" ? styles.center : ""}`}>
    <Reveal>
      <span className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        <span className={styles.line} aria-hidden />
        {eyebrow}
      </span>
    </Reveal>
    <Reveal delay={80}>
      <h2 className={styles.title}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={160}>
        <p className={styles.subtitle}>{subtitle}</p>
      </Reveal>
    )}
  </header>
);

export default SectionHeading;
