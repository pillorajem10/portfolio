// Shared UI
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import useSpotlight from "./hooks/useSpotlight";

// Modules
import Home from "./modules/Home";
import About from "./modules/About";
import Marquee from "./modules/Marquee";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";

import styles from "./App.module.css";

const App = () => {
  useSpotlight();

  return (
    <div className={styles.container}>
      <Background />
      <Cursor />
      <Navbar />

      <main className={styles.main}>
        <div id="home">
          <Home />
        </div>
        <Marquee />
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
