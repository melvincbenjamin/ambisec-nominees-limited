import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import contactcall from "../assets/contactcall.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>Ambisec Nominees Limited | Corporate Governance & Compliance Nigeria</title>
        <meta
          name="description"
          content="Ambisec Nominees Limited provides corporate secretarial services, business incorporation, and corporate governance advisory in Nigeria."
        />
        <meta
          name="keywords"
          content="corporate governance Nigeria, company secretarial services, CAC registration, business compliance Nigeria, Ambisec Nominees"
        />
        <meta name="author" content="Ambisec Nominees Limited" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Ambisec Nominees Limited" />
        <meta
          property="og:description"
          content="Corporate secretarial and governance experts in Nigeria."
        />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${contactcall})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          marginTop: "60px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        />

        <div className="position-relative text-white px-3">
          <Slide direction="down" triggerOnce>
            <h1 className="fw-bold">Contact Us</h1>
          </Slide>

          <Fade delay={200} triggerOnce>
            <p className="mx-auto" style={{ maxWidth: "500px" }}>
              Our team is always available to provide support and guidance for your business needs.
            </p>
          </Fade>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Container className="py-5">
        <Row className="g-4">
          
          {/* Contact Info */}
          <Col xs={12} lg={5}>
            <Fade direction="left" triggerOnce>
              <div>
                <h3 className="fw-bold mb-3" style={{ color: "#3e729a" }}>
                  Get in Touch
                </h3>

                <p>
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  40 Shipeolu Street, Off Ikorodu Road, Palm Grove, Lagos, Nigeria
                </p>

                <p>
                  <FaPhone className="me-2 text-primary" />
                  +234 803 304 8836
                </p>

                <p>
                  <FaEnvelope className="me-2 text-primary" />
                  odiliokechukwu@yahoo.com
                </p>

                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Follow Us</h6>

                  <a href="#" className="me-3 text-dark">
                    <FaFacebook size={20} />
                  </a>

                  <a href="#" className="me-3 text-dark">
                    <FaLinkedin size={20} />
                  </a>

                  <a href="#" className="me-3 text-dark">
                    <FaInstagram size={20} />
                  </a>

                  <a href="mailto:odiliokechukwu@yahoo.com" className="text-dark">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </Fade>
          </Col>

          {/* Map */}
          <Col xs={12} lg={7}>
            <Fade direction="right" triggerOnce>
              <div
                className="rounded overflow-hidden shadow-sm w-100"
                style={{ height: "300px" }}
              >
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </Fade>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Contact;