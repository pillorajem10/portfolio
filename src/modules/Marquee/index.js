import styles from "./index.module.css";

const ITEMS = [
  "React",
  "Redux",
  "Node.js",
  "Express",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Docker",
  "Ubuntu",
  "Git",
];

// Infinite ticker. The list is rendered twice so the -50% loop is seamless.
const Module = () => (
  <div className={styles.marquee} aria-hidden>
    <div className={styles.track}>
      {[0, 1].map((copy) => (
        <ul key={copy} className={styles.group}>
          {ITEMS.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.star}>✦</span>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Module;
