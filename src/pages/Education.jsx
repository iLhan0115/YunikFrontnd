import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

// Inline CSS for styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    color: '#000',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.2)',
  },
  footer: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#bdc3c7',
  },
  carousel: {
    transition: 'transform 1.5s ease !important', // Added transition duration for carousel
  },
};

function Education() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>I Studied at:</h1>

      {/* Carousel */}
      <Carousel interval={null} className="w-75" style={styles.carousel}>
        
        {/* Primary Education */}
        <Carousel.Item>
          <Card style={styles.card} className="mb-3" 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <Card.Header style={styles.cardTitle}>Ocampo Central School</Card.Header>
              <Card.Subtitle style={styles.cardSubtitle} className="mb-2">
                S/Y 2008 - 2014<br />
                (Primary Education)
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>
        
        {/* Secondary Education */}
        <Carousel.Item>
          <Card style={styles.card} className="mb-3" 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <Card.Header style={styles.cardTitle}>Ocampo National High School</Card.Header>
              <Card.Subtitle style={styles.cardSubtitle} className="mb-2">
                S/Y 2014 - 2020<br />
                (Secondary Education)
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>
        
        {/* Tertiary Education */}
        <Carousel.Item>
          <Card style={styles.card} className="mb-3" 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <Card.Header style={styles.cardTitle}>Naga College Foundation Inc.</Card.Header>
              <Card.Subtitle style={styles.cardSubtitle} className="mb-2">
                S/Y 2023 - (Kung Makatapos)<br />
                (Tertiary Education)
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>

      </Carousel>

      <div style={styles.footer}>
        © 2024 All rights reserved.
        <p>YunikTheProgrammer</p>
      </div>
    </div>
  );
}

export default Education;
