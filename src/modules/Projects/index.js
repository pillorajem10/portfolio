import React from 'react';
import styles from './index.module.css';
import uscStore from './USC.PNG';
import uscAdmin from './USC_admin.PNG';
import wotgBlogs from './wotg_blogs.PNG';
import wotgMission from './wotg_mission.PNG';
import wotgSocial from './wotg_social.PNG';
import wotgChat from './wotg_chat.PNG';
import rptgen from './rptgen.PNG';

const projects = [
  {
    title: 'USC Store',
    description: 'A B2B ecommerce for ukay ukay resellers created using Laravel.',
    image: uscStore,
    link: 'https://store.ukayukaysupplier.com/',
  },
  {
    title: 'USC Admin',
    description: 'Admin website for USC Store to monitor sales, add products, and check inventory using Laravel.',
    image: uscAdmin,
    link: 'https://admin.ukayukaysupplier.com/login',
  },
  {
    title: 'Blogs WOTG Online',
    description: 'A blog website created using Laravel for daily devotions.',
    image: wotgBlogs,
    link: 'https://blogs.wotgonline.com/blogs',
  },
  {
    title: 'Mission WOTG Online',
    description: 'A website for WOTG Church missionaries to connect with seekers via a built-in email system.',
    image: wotgMission,
    link: 'https://mission.wotgonline.com/',
  },
  {
    title: 'WOTG Online Community',
    description: 'A social website where members can share family photos and spiritual gatherings, built with Laravel.',
    image: wotgSocial,
    link: 'https://blogs.wotgonline.com/',
  },
  {
    title: 'WOTG Chat App (Ongoing)',
    description: 'A chat website built using ReactJS, NodeJS/Express, and MySQL for gospel sharing and communication.',
    image: wotgChat,
    link: 'https://chat.wotgonline.com/',
  },
  {
    title: 'Rptgen',
    description: 'A report-generating tool for healthcare clinics using MERN Stack and Spring Boot.',
    image: rptgen,
    link: 'https://rptgen.net/',
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.flexContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>Check Out!</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
