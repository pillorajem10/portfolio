import React, { useState } from "react";

// Modules
import Home from "./modules/Home";
import Projects from "./modules/Projects";
import Skills from "./modules/Skills";

// Components
import Sidebar from "./components/Sidebar"; // Adjust the import path as necessary

import styles from "./App.module.css";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} scrollToSection={scrollToSection} />
      <div
        className={styles.main_body}
        style={{ width: isCollapsed ? "calc(100% - 50px)" : "calc(100% - 90px)" }}
      >
        <div id="home"><Home /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
      </div>
    </div>
  );
};

export default App;
