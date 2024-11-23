import React from 'react';

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
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    maxWidth: '800px',
    lineHeight: '1.6',
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    fontSize: '1rem',
    color: '#bdc3c7',
  }
};

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p style={styles.paragraph}>
        Hi! My name is Allan O. Flores Jr. I'm 23 years old and currently living in Gatbo, Ocampo, Camarines Sur.
        I enjoy watching anime, playing games, and other things. I love learning new things, meeting new people,
        and exploring new opportunities. I look forward to connecting and sharing experiences with you all.
      </p>
      <div style={styles.footer}>
        © 2024 All rights reserved.
        <p>YunikTheProgrammer</p>
      </div>
    </div>
  );
}

export default About;
