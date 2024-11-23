import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

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
    padding: '20px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    color: '#000', // Black text color for the card
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  cardText: {
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
};

function Hobbies() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Hobbies</h1>
      <Row className="w-100" style={{ maxWidth: '800px' }}>
        <Col md={6} className="mb-4">
          <Card style={styles.card} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <Card.Header style={styles.cardTitle}>Watching Anime</Card.Header>
              <Card.Text style={styles.cardText}>
                One Piece, Kimetsu No Yaiba, Jujutsu Kaisen, etc. (Except those Romance genres)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card style={styles.card} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <Card.Header style={styles.cardTitle}>Basketball</Card.Header>
              <Card.Text style={styles.cardText}>
                I love Stephen Curry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div style={styles.footer}>
        © 2024 All rights reserved.
        <p>YunikTheProgrammer</p>
      </div>
    </div>
  );
}

export default Hobbies;
