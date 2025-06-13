import React from 'react';

const TopNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyApp</div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ed8936',
    padding: '10px 20px',
    color: '#fff',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default TopNavbar;
