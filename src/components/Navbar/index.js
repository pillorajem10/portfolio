import { useEffect, useState } from "react";
import styles from "./index.module.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 24);
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll-spy: highlight the section nearest the middle of the viewport.
  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo} aria-label="Jem Pillora, back to top">
            <span className={styles.logoMark}>J</span>
            <span className={styles.logoText}>
              jem<span className="gradient-text">.dev</span>
            </span>
          </a>

          <nav className={`${styles.links} ${open ? styles.open : ""}`} aria-label="Primary">
            {LINKS.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`${styles.link} ${active === l.id ? styles.active : ""}`}
                style={{ "--i": i }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
