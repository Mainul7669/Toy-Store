import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mb-0">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <img src="/src/assets/logo.png" alt="Website Logo" width="50" height="50" className="mb-2" />
            <p className="m-0">ToyTroop Universe</p>
          </Col>
          <Col md={4} className="text-center my-3 my-md-0">
            <h5>Contact Us</h5>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@toytroopuniverse.com</p>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com/toytroopuniverse" target="_blank" rel="noopener noreferrer" className="mr-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/toytroopuniverse" target="_blank" rel="noopener noreferrer" className="mr-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/toytroopuniverse" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="mt-3">1234 Main Street, City, State, ZIP</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} ToyTroop Universe. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
