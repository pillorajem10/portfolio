import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import styles from "./index.module.css";
import portrait from "./grad.webp";
import { profile } from "../../data/profile";
import useTilt from "../../hooks/useTilt";
import useMagnetic from "../../hooks/useMagnetic";
import { prefersReducedMotion } from "../../hooks/useReducedMotion";

const STATS = [
  { value: 5, suffix: "", label: "Projects shipped" },
  { value: 10, suffix: "+", label: "Tools & frameworks" },
  { value: 100, suffix: "%", label: "Self-taught" },
];

const CHIPS = [
  { label: "React", className: "c1" },
  { label: "Node.js", className: "c2" },
  { label: "Laravel", className: "c3" },
  { label: "Docker", className: "c4" },
];

// Rotating role with a typewriter effect.
const useTypewriter = (words) => {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : "");

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 70);
      } else {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, 35);
      }
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
};

const Module = () => {
  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const primaryRef = useRef(null);
  const ghostRef = useRef(null);
  const nameRef = useRef(null);
  const role = useTypewriter(profile.roles);

  // Each letter is its own gradient layer; align them so together they read as ONE gradient.
  useEffect(() => {
    const line = nameRef.current;
    const layout = () => {
      const lineRect = line.getBoundingClientRect();
      line.querySelectorAll("[data-hero='mask']").forEach((mask) => {
        const char = mask.firstChild;
        const offset = mask.getBoundingClientRect().left - lineRect.left;
        char.style.backgroundSize = `${lineRect.width}px 100%`;
        char.style.backgroundPosition = `${-offset}px 0`;
      });
    };
    layout();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, []);

  useTilt(cardRef, { max: 9, scale: 1.03 });
  useMagnetic(primaryRef, 0.25);
  useMagnetic(ghostRef, 0.25);

  // Entrance timeline, counters and mouse parallax.
  useEffect(() => {
    const root = rootRef.current;
    const reduced = prefersReducedMotion();

    const counters = root.querySelectorAll("[data-count]");
    if (reduced) {
      counters.forEach((el) => {
        el.textContent = el.dataset.count;
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-hero='pill']", { y: 20, opacity: 0, duration: 0.8 }, 0.3)
        .from("[data-hero='char']", { yPercent: 110, opacity: 0, duration: 1, stagger: 0.03 }, 0.4)
        .from("[data-hero='role']", { y: 20, opacity: 0, duration: 0.8 }, 0.9)
        .from("[data-hero='text']", { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 }, 1.0)
        .from("[data-hero='cta']", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, 1.3)
        .from("[data-hero='stat']", { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, 1.5)
        .from(
          "[data-hero='visual']",
          { scale: 0.85, opacity: 0, rotate: -4, duration: 1.3, ease: "expo.out" },
          0.6
        )
        .from("[data-hero='chip']", { scale: 0, opacity: 0, duration: 0.8, stagger: 0.12, ease: "back.out(2)" }, 1.4);

      counters.forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          delay: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.v);
          },
        });
      });
    }, root);

    // Parallax for the floating chips / portrait glow following the pointer.
    const layers = root.querySelectorAll("[data-depth]");
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      layers.forEach((layer) => {
        const d = Number(layer.dataset.depth);
        gsap.to(layer, { x: x * d, y: y * d, duration: 0.8, ease: "power3.out", overwrite: "auto" });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={rootRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <span data-hero="pill" className={styles.pill}>
            <span className={styles.pulse} aria-hidden />
            Open to new projects
          </span>

          <h1 className={styles.name} aria-label={profile.name}>
            <span className={styles.hi}>Hi, I'm</span>
            <span ref={nameRef} className={styles.nameLine} aria-hidden>
              {"Jem Pillora".split("").map((ch, i) => (
                <span key={i} data-hero="mask" className={styles.charMask}>
                  <span data-hero="char" className={styles.char}>
                    {ch === " " ? " " : ch}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <p data-hero="role" className={styles.role}>
            <span className={styles.prompt}>&gt;</span>
            <span className={styles.roleText}>{role}</span>
            <span className={styles.caret} aria-hidden />
          </p>

          <p data-hero="text" className={styles.text}>
            I'm a self-taught developer passionate about crafting seamless digital experiences. From
            React frontends to robust APIs in Node.js and Laravel, I turn ideas into full-scale
            applications with precision and creativity.
          </p>

          <div className={styles.actions}>
            <a data-hero="cta" ref={primaryRef} href="#projects" className={styles.primary}>
              <span>View my work</span>
              <ArrowRight size={18} className={styles.arrow} />
              <span className={styles.shine} aria-hidden />
            </a>
            <a data-hero="cta" ref={ghostRef} href="#skills" className={styles.ghost}>
              <Sparkles size={17} />
              <span>Tech stack</span>
            </a>
          </div>

          <ul className={styles.stats}>
            {STATS.map((s) => (
              <li key={s.label} data-hero="stat" className={styles.stat}>
                <strong>
                  <span data-count={s.value}>{s.value}</span>
                  {s.suffix}
                </strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} data-hero="visual">
          <div className={styles.glow} data-depth="30" aria-hidden />
          <div ref={cardRef} className={styles.card}>
            <span className={`${styles.corner} ${styles.tl}`} aria-hidden />
            <span className={`${styles.corner} ${styles.tr}`} aria-hidden />
            <span className={`${styles.corner} ${styles.bl}`} aria-hidden />
            <span className={`${styles.corner} ${styles.br}`} aria-hidden />
            <div className={styles.ring} aria-hidden />
            <div className={styles.photoWrap}>
              <img src={portrait} alt="Portrait of Jem Pillora" className={styles.photo} />
              <span className={styles.scan} aria-hidden />
            </div>
            <div className={styles.tag}>
              <span className={styles.tagDot} aria-hidden />
              <span>jem@portfolio ~ online</span>
            </div>
          </div>

          {CHIPS.map((c, i) => (
            <span
              key={c.label}
              data-hero="chip"
              data-depth={20 + i * 12}
              className={`${styles.chip} ${styles[c.className]}`}
            >
              <span className={styles.chipInner}>{c.label}</span>
            </span>
          ))}
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Scroll to about section">
        <span>Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
};

export default Module;
