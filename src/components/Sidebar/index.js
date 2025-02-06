import React from 'react';
import styles from './index.module.css'; // Adjust path if necessary
import logo from './portfolio_logo.png'; // Adjust the import path

const Sidebar = ({ isCollapsed, toggleSidebar, scrollToSection }) => {
  return (
    <div className={styles.sidebar} style={{ width: isCollapsed ? '50px' : '90px' }}>
      <div className={styles.sidebarContent} style={{ width: isCollapsed ? '50px' : '90px' }}>
        <div className={styles.logo} onClick={toggleSidebar}>
          <img
            src={logo} // Use imported logo
            alt="Logo"
            style={{ width: '50px', height: 'auto' }} // Adjust size based on state
          />
        </div>
        {!isCollapsed && (
          <ul className={styles.sidebarLinks}>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
