import React from 'react';
import Container from 'react-bootstrap/Container';

const footer = {
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#f8f9fa'
}

function Footer() {
    return(
        <footer className="footer" style={footer}>
            <Container>
                <span className="text-muted">
                    All rights reserved &copy; Manifolde Techologies
                </span>
            </Container>
        </footer>
    );
}

export default Footer;