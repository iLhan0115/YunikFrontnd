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
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    fontSize: '1rem',
    color: '#bdc3c7',
  }
};

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Bossing! Welcome sa Website ko.</h1>
      <p style={styles.paragraph}>Feel free to learn more about me.</p>
      <div style={styles.footer}>
        © 2024 All rights reserved.
        <p>YunikTheProgrammer</p>
      </div>
    </div>
  );
}

export default Home;