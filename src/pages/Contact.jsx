import { Container, Row, Col, Card } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import contactcall from "../assets/contactcall.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="py-5">
      {/* Page Title */}
      <Slide direction="down" triggerOnce>
        <h2
          className="pt-4 fw-bold text-center mb-5"
          style={{ color: "#3e729a", fontSize: "2.5rem" }}
        >
          Contact Us
        </h2>
      </Slide>

      <Row className="g-4 align-items-stretch">
        {/* Contact Info */}
        <Col lg={6}>
          <Fade direction="left" triggerOnce>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title
                  className="fw-bold mb-4"
                  style={{ color: "#3e729a" }}
                >
                  Get in Touch
                </Card.Title>

                <p>
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  40 Shipeolu Street, Off Ikorodu Road,
                  Palm Grove, Lagos, Nigeria
                </p>

                <p>
                  <FaPhone className="me-2 text-primary" />
                  +234 803 304 8836
                </p>

                <p>
                  <FaEnvelope className="me-2 text-primary" />
                  odiliokechukwu@yahoo.com
                </p>

                {/* Social Media */}
                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Follow Us</h6>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="me-3 text-dark"
                  >
                    <FaFacebook size={22} />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="me-3 text-dark"
                  >
                    <FaLinkedin size={22} />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="me-3 text-dark"
                  >
                    <FaInstagram size={22} />
                  </a>

                  {/* Gmail Link */}
                  <a
                    href="mailto:odiliokechukwu@yahoo.com"
                    className="text-dark"
                  >
                    <FaEnvelope size={22} />
                  </a>
                </div>

                {/* Google Map */}
                <div className="mt-4" style={{ height: "250px" }}>
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.196597578157!2d3.394097275641783!3d6.607091395261538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f7db2f5c47%3A0x7d9a7a8cb5f9f8c8!2s40%20Shipeolu%20Street%2C%20Ikorodu%20Road%2C%20Palm%20Grove%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1696909623074!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Fade>
        </Col>

        {/* Image Section */}
        <Col lg={6}>
          <Fade direction="right" triggerOnce>
            <img
              src={contactcall}
              alt="Receptionist on call"
              className="img-fluid rounded shadow-sm w-100 h-100"
              style={{ objectFit: "cover", minHeight: "100%" }}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;