// Modules
import Home from "./modules/Home";
import Projects from "./modules/Projects";
import Skills from "./modules/Skills";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_body}>
        <div id="home"><Home /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
      </div>
    </div>
  );
};

export default App;
