import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'; // Importing icons

// Inline CSS for styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #8e44ad, #3498db)',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    position: 'relative',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '40px',
  },
  listItem: {
    fontSize: '1.5rem',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '10px',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#f39c12',
  },
  icon: {
    fontSize: '1.8rem', // Adjust size of the icons
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    fontSize: '1rem',
    color: '#bdc3c7',
  }
};

function Socials() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Connect with me!</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <FaFacebookF style={styles.icon} /> {/* Facebook Icon */}
          <a href="https://www.facebook.com/iYunik15/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Facebook
          </a>
        </li>
        <li style={styles.listItem}>
          <FaInstagram style={styles.icon} /> {/* Instagram Icon */}
          <a href="https://www.instagram.com/ilhanz.f" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Instagram
          </a>
        </li>
        <li style={styles.listItem}>
          <FaGithub style={styles.icon} /> {/* GitHub Icon */}
          <a href="https://github.com/iLhan0115" target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub
          </a>
        </li>
      </ul>
      <div style={styles.footer}>
        © 2024 All rights reserved.
        <p>YunikTheProgrammer</p>
      </div>
    </div>
  );
}

export default Socials;
