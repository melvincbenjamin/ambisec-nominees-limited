import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Fade, Slide } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <Container className="py-5">
      {/* Page Title */}
      <Slide direction="down" triggerOnce>
        <h2 className="fw-bold text-center mb-5" style={{ color: '#3e729a', fontSize: '2.5rem', paddingTop: "20px" }}>
          Contact Us
        </h2>
      </Slide>

      <Row className="g-4 mb-5">
        {/* Contact Information */}
        <Col md={6}>
          <Fade direction="left" triggerOnce>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold mb-4" style={{ color: '#3e729a' }}>Get in Touch</Card.Title>
                
                <h5 className="fw-bold">Address:</h5>
                {/* Lagos Office */}
                <h5 className="fw-bold mt-3">LAGOS OFFICE:</h5>
                <p>
                  40 Shipeolu Street,<br />
                  Off Ikorodu Road, Palm Grove, Lagos, Nigeria<br />
                  Tel: +2348033048836, +2348033902042
                </p>

                {/* Google Map Embed */}
                <div className="mt-4" style={{ width: '100%', height: '300px' }}>
                  <iframe
                    title="Ambisec Nominees Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.196597578157!2d3.394097275641783!3d6.607091395261538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f7db2f5c47%3A0x7d9a7a8cb5f9f8c8!2s40%20Shipeolu%20Street%2C%20Ikorodu%20Road%2C%20Palm%20Grove%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1696909623074!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Fade>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <Fade direction="right" triggerOnce>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold mb-4" style={{ color: '#3e729a' }}>Send Us a Message</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                  </Form.Group>

                  <Button variant="dark" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact