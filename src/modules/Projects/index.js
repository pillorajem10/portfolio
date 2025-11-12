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
      'A full-featured social media platform for WOTG Church — integrating music, devotion feeds, live chat (Socket.IO), Bible access, and live worship streaming. Built with the MERN stack to create a connected digital space for faith and fellowship.',
    image: wotgSocial,
    link: 'https://community.wotgonline.com/',
  },
  {
    title: 'WOTG Online Community Admin',
    description:
      'An intuitive administration console for managing users, content, and live events within the WOTG Community. Developed with React and NodeJS, featuring secure role-based controls, analytics, and streamlined moderation tools.',
    image: wotgAdmin,
    link: 'https://management.wotgonline.com/',
  },
  {
    title: 'Marga Enterprises Accounting System',
    description:
      'A custom-built accounting and reporting platform designed to automate financial workflows for Marga Enterprises. Developed using the MERN stack, it simplifies transactions, reporting, and audit tracking for business operations.',
    image: margaAccounting,
    link: 'https://accountingsystem.marga.biz/',
  },
  {
    title: 'Rptgen',
    description:
      'A cross-platform report generation tool built for healthcare clinics and diagnostic centers. Powered by the MERN stack and Spring Boot, Rptgen enables automated report creation, real-time data analysis, and secure record management.',
    image: rptgen,
    link: 'https://rptgen.net/',
  },
  {
    title: 'Garbia SGS',
    description:
      'A professional geotechnical and soil testing solutions company website showcasing Garbia’s engineering services, laboratory capabilities, and structural consultancy expertise. Designed with React and modern UI principles to reflect precision and reliability in the field of geotechnical engineering.',
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
