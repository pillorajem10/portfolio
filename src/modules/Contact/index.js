import { useRef } from "react";
import { ArrowUp, Mail, Rocket } from "lucide-react";
import Reveal from "../../components/Reveal";
import useMagnetic from "../../hooks/useMagnetic";
import { profile } from "../../data/profile";
import styles from "./index.module.css";

const Module = () => {
  const ctaRef = useRef(null);
  useMagnetic(ctaRef, 0.2);

  const links = [
    profile.github && { label: "GitHub", href: profile.github },
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin },
  ].filter(Boolean);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.panel} data-spotlight>
            <div className={styles.orbit} aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.badge}>
              <Rocket size={15} /> Got an idea?
            </span>
            <h2 className={styles.title}>
              Let's build something <span className="gradient-text">remarkable</span> together.
            </h2>
            <p className={styles.text}>
              Whether it's a new product, an internal system or a company website — I'd love to hear
              about it and help bring it to life.
            </p>

            <div className={styles.actions}>
              {profile.email && (
                <a ref={ctaRef} href={`mailto:${profile.email}`} className={styles.primary}>
                  <Mail size={18} />
                  <span>Say hello</span>
                </a>
              )}
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ghost}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <footer className={styles.footer}>
          <span>
            © {new Date().getFullYear()} {profile.name}. Built with React &amp; a lot of coffee.
          </span>
          <a href="#home" className={styles.top}>
            Back to top <ArrowUp size={16} />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Module;
