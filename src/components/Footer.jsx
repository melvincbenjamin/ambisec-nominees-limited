import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#3e729a', paddingTop: '50px' }}>
      <Container>
        <Row className="mb-4">
          {/* Company Description */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">About Ambisec Nominees</h5>
            <p>
              We are a multifaceted corporate governance and company secretarial firm that provides tailored solutions
              to meet the needs of our clients across Nigeria. Our approach combines local expertise with global best practices.
            </p>
          </Col>

          {/* Navigation Links */}
          <Col md={2} className="mb-3">
            <h5 className="fw-bold">Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/board" className="text-white text-decoration-none">Board</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">40, Shipeolu Street, Palm Groove, Lagos, Nigeria</p>
            <p className="mb-1">+234 8033048836</p>
            <p className="mb-1">odiliokechukwu@yahoo.com</p>
          </Col>
          <div className="mt-2 text-end">
              <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={20} /></a>
              <a href="#" className="text-white me-3"><FaLinkedin size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
            </div>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

        <Row className="pt-3">
          <Col className="text-center">
            <p className="mb-0">
              2026 © Ambisec Nominees Limited. All rights reserved. MelTech Breeze Production.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer