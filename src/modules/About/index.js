import { Gauge, Layers, PenTool } from "lucide-react";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import styles from "./index.module.css";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Clean architecture",
    text: "Maintainable, well-structured code that scales with the product instead of fighting it.",
  },
  {
    icon: Gauge,
    title: "Optimized performance",
    text: "Fast APIs, lean frontends and efficient queries — speed is a feature, not an afterthought.",
  },
  {
    icon: PenTool,
    title: "Intuitive design",
    text: "Interfaces that feel obvious to use, so solutions don't just work — they make an impact.",
  },
];

const Module = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <SectionHeading
        index="01"
        eyebrow="About me"
        title="Turning ideas into"
        highlight="full-scale applications"
        subtitle="I design interfaces, build the APIs behind them and ship them — end to end."
      />

      <div className={styles.layout}>
        <div className={styles.left}>
          <Reveal>
            <p className={styles.lead}>
              My focus is on <strong>clean architecture</strong>, <strong>optimized performance</strong>{" "}
              and <strong>intuitive design</strong> — creating solutions that not only work but make
              an impact.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.body}>
              Self-taught and always learning, I move comfortably across the stack: React and Redux
              on the frontend, Node.js, Express and Laravel on the backend, MongoDB and MySQL for
              data, and Docker on Ubuntu for deployment.
            </p>
          </Reveal>

          <ul className={styles.principles}>
            {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={150 + i * 90}>
                <div className={styles.principle}>
                  <span className={styles.icon}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className={styles.right}>
          <div className={styles.window} data-spotlight>
            <div className={styles.bar}>
              <span className={styles.dots} aria-hidden>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.filename}>developer.js</span>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.c}>{"// who am I?"}</span>
                {"\n"}
                <span className={styles.k}>const</span> <span className={styles.v}>jem</span>{" "}
                <span className={styles.p}>=</span> {"{"}
                {"\n  "}
                <span className={styles.a}>name</span>
                <span className={styles.p}>:</span> <span className={styles.s}>"Jem Pillora"</span>,
                {"\n  "}
                <span className={styles.a}>role</span>
                <span className={styles.p}>:</span> <span className={styles.s}>"Full Stack Developer"</span>,
                {"\n  "}
                <span className={styles.a}>frontend</span>
                <span className={styles.p}>:</span> [<span className={styles.s}>"React"</span>,{" "}
                <span className={styles.s}>"Redux"</span>],
                {"\n  "}
                <span className={styles.a}>backend</span>
                <span className={styles.p}>:</span> [<span className={styles.s}>"Node.js"</span>,{" "}
                <span className={styles.s}>"Express"</span>,{"\n    "}
                <span className={styles.s}>"Laravel"</span>],
                {"\n  "}
                <span className={styles.a}>data</span>
                <span className={styles.p}>:</span> [<span className={styles.s}>"MongoDB"</span>,{" "}
                <span className={styles.s}>"MySQL"</span>],
                {"\n  "}
                <span className={styles.a}>ships</span>
                <span className={styles.p}>:</span> <span className={styles.s}>"end to end"</span>,
                {"\n  "}
                <span className={styles.a}>learning</span>
                <span className={styles.p}>:</span> <span className={styles.n}>true</span>,{"\n"}
                {"}"};{"\n\n"}
                <span className={styles.k}>export default</span> <span className={styles.v}>jem</span>;
                <span className={styles.cursor} aria-hidden />
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Module;
