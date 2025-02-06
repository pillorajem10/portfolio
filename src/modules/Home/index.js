import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./index.module.css";
import logo from "./grad.jpg";

const Module = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Fade in the hero section
    tl.from(heroRef.current, { opacity: 0, duration: 1 });

    // Image slides in from the left
    tl.from(imageRef.current, { x: -50, opacity: 0, duration: 1 }, "-=0.8");

    // Title slides in from the top
    tl.from(titleRef.current, { y: -50, opacity: 0, duration: 1 }, "-=0.5");

    // Subtitle slides in from the left
    tl.from(subtitleRef.current, { x: -30, opacity: 0, duration: 1 }, "-=0.7");

    // Stagger fade-in effect for text paragraphs
    tl.from(textRefs.current, { opacity: 0, y: 20, duration: 1, stagger: 0.3 }, "-=0.5");

  }, []);

  return (
    <div ref={heroRef} className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <img ref={imageRef} src={logo} alt="John Emmanuel Pillora" className={styles.heroImage} />
      </div>
      <div className={styles.detailsContainer}>
        <h1 ref={titleRef} className={styles.heroTitle}>John Emmanuel "Jem" Pillora</h1>
        <p ref={subtitleRef} className={styles.heroSubtitle}>Full Stack Developer</p>
        <p ref={(el) => (textRefs.current[0] = el)} className={styles.heroSubtitle1}>
          I'm a self-taught programmer with a passion for web development. Over the years, I've honed my skills in full-stack development, working with technologies like PHP Laravel, MySQL, React.js, and Node.js/Express.
        </p>
        <p ref={(el) => (textRefs.current[1] = el)} className={styles.heroSubtitle1}>
          My journey started with curiosity and a drive to build functional, user-friendly applications. I enjoy solving problems, optimizing database queries, and creating scalable solutions for businesses. From e-commerce platforms to social media applications, my work reflects my dedication to quality and performance.
        </p>
      </div>
    </div>
  );
};

export default Module;
