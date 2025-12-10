import styles from './index.module.css';
import wotgSocial from './wotg_social.webp';
import rptgen from './rptgen.webp';
import margaAccounting from './marga_accounting.webp';
import wotgAdmin from './wotg_admin.webp';
import garbia from './garbia.webp';

const projects = [
  {
    title: 'WOTG Online Community',
    description:
      'A full-featured social platform for WOTG Church that includes devotion feeds, music playlists, real-time chat, Bible access, and live worship streaming — all in one connected digital space.',
    image: wotgSocial,
    link: 'https://community.wotgonline.com/',
  },
  {
    title: 'WOTG Online Community Admin',
    description:
      'An intuitive admin console for managing users, content, announcements, and live events. Features role-based access, content moderation tools, and community activity oversight.',
    image: wotgAdmin,
    link: 'https://management.wotgonline.com/',
  },
  {
    title: 'Marga Enterprises Accounting System',
    description:
      'A custom accounting platform that automates sales tracking, billing, payroll, inventory, collection, and financial reporting — streamlining end-to-end business workflows.',
    image: margaAccounting,
    link: 'https://accountingsystem.marga.biz/',
  },
  {
    title: 'Rptgen',
    description:
      'A report-generation system for clinics and diagnostic centers, offering automated report creation, patient record management, secure access, and real-time data viewing.',
    image: rptgen,
    link: 'https://rptgen.net/',
  },
  {
    title: 'Garbia SGS',
    description:
      'A company website showcasing geotechnical, structural, and soil testing services — presenting laboratory capabilities, project portfolio, and engineering expertise with a clean and professional interface.',
    image: garbia,
    link: 'https://garbiasgs.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.subtitle}>
        A curated showcase of web applications and systems I’ve crafted — merging functionality,
        design, and purpose to deliver meaningful digital experiences.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />

            <div className={styles.cardBody}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                onClick={(e) => e.stopPropagation()}
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
