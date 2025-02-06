import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./index.module.css";

import gitLogo from './images/git.png';
import laravelLogo from './images/logoLaravel.png';
import mongoLogo from './images/mongo.png';
import mysqlLogo from './images/msqlLogo.png';
import nestjsLogo from './images/nestjs.png';
import nodeLogo from './images/node.png';
import reactLogo from './images/react.png';
import reduxLogo from './images/redux.png';
import ubuntuLogo from './images/ubuntu1.png';
import expressLogo from './images/expressLogo.png';

const Module = () => {
  const [isMobile, setIsMobile] = useState(false);  // Track screen size

  const skills = [
    { name: "NodeJS", details: "A JavaScript runtime built on Chrome's V8 engine, enabling the development of fast and scalable server-side applications using JavaScript. It is particularly well-suited for building real-time applications and APIs.", image: nodeLogo },
    { name: "ReactJS", details: "A powerful JavaScript library developed by Facebook for building user interfaces. React helps create dynamic, single-page applications by efficiently updating the UI with minimal performance cost using a component-based architecture.", image: reactLogo },
    { name: "NestJS", details: "A progressive Node.js framework that uses TypeScript by default and is built with scalability and maintainability in mind. It is ideal for building efficient, reliable, and scalable server-side applications.", image: nestjsLogo },
    { name: "ExpressJS", details: "A fast, minimalist web framework for Node.js, which simplifies routing and middleware management. It is commonly used for building web APIs and has a vast ecosystem of plugins and tools.", image: expressLogo },
    { name: "Ubuntu/Linux", details: "Ubuntu is an open-source Linux operating system widely used for development, particularly for server environments. It provides a stable, secure, and customizable platform for deploying applications.", image: ubuntuLogo },
    { name: "Git", details: "A distributed version control system that allows multiple developers to track changes in code, collaborate, and manage different versions of a project efficiently. It is the backbone of modern software development workflows.", image: gitLogo },
    { name: "Laravel", details: "A PHP web framework designed for building elegant and scalable web applications. With its expressive syntax and built-in tools for authentication, routing, and database management, Laravel is perfect for rapid web development.", image: laravelLogo },
    { name: "MongoDB", details: "A NoSQL database that stores data in a flexible, JSON-like format. It is highly scalable and ideal for applications that require high availability and real-time performance. It is commonly used with Node.js and other JavaScript frameworks.", image: mongoLogo },
    { name: "MySQL", details: "An open-source relational database management system known for its speed and reliability. It uses structured query language (SQL) to manage data in tables and is often used in web development to store structured data.", image: mysqlLogo },
    { name: "Redux", details: "A predictable state container for JavaScript apps, often used with React. Redux helps manage application state globally, enabling you to write applications that behave consistently, run in different environments, and are easy to test.", image: reduxLogo }
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      if (window.innerWidth < 495) {
        console.log("MOBILE")
        setIsMobile(true); // Set mobile state when width is less than 495px
      } else {
        console.log("NOT MOBILE")
        setIsMobile(false); // Set desktop state
      }
    };

    // Set initial screen size on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Only apply flip animations if not on mobile
    if (!isMobile) {
      console.log('IS MOVILE', isMobile)
      cardRefs.current.forEach((card, index) => {
        gsap.set(card, { rotationY: 0 });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { rotationY: 180, duration: 0.2, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotationY: 0, duration: 0.2, ease: "power2.out" });
        });
      });
    }
  }, [isMobile]); // This useEffect runs when `isMobile` state changes

  

  return (
    <div className={styles.module_main_container}>
      <div className={styles.skillsFlexContainer}>
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={styles.card}
          >
            <div className={styles.cardFront}>
              <img src={skill.image} alt={skill.name} className={styles.cardImage} />
              <h3 className={styles.skillname}>{skill.name}</h3>
            </div>
            <div className={styles.cardBack}>
              <p className={styles.skillDetails}>{skill.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module;
