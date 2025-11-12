import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./index.module.css";
import logo from "./grad.webp";
import office from "./office.webp";

const Module = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(heroRef.current, { opacity: 0, duration: 1 });
    tl.from(imageRef.current, { x: -60, opacity: 0, duration: 1 }, "-=0.5");
    tl.from(titleRef.current, { y: -40, opacity: 0, duration: 0.8 }, "-=0.6");
    tl.from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.5");
    tl.from(textRefs.current, { opacity: 0, y: 30, duration: 0.8, stagger: 0.3 }, "-=0.4");
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <img src={office} alt="Office Background" className={styles.bgImage} />

      <div className={styles.heroContent}>
        <div className={styles.leftCol}>
          <img ref={imageRef} src={logo} alt="Jem Pillora" className={styles.profileImage} />
        </div>

        <div className={styles.rightCol}>
          <h1 ref={titleRef} className={styles.heroTitle}>
            John Emmanuel “Jem” Pillora
          </h1>
          <h2 ref={subtitleRef} className={styles.heroSubtitle}>
            Full Stack Developer
          </h2>

          <p ref={(el) => (textRefs.current[0] = el)} className={styles.heroText}>
            I’m a self-taught developer passionate about crafting seamless digital experiences. From
            designing frontends in React to building robust APIs with Node.js and Laravel, I turn
            ideas into full-scale applications with precision and creativity.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)} className={styles.heroText}>
            My focus is on clean architecture, optimized performance, and intuitive design —
            creating solutions that not only work but make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Module;
