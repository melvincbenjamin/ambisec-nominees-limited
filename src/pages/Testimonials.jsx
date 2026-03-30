// Testimonials.jsx
import { Helmet } from "react-helmet-async";
import { Container, Card, Carousel, Form, Button, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import Hero2 from "../assets/Hero2.jpg";

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "firebase/firestore";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: ""
  });

  const testimonialsRef = collection(db, "testimonials");

  // 🔥 FETCH TESTIMONIALS FROM FIRESTORE (Newest first)
  const fetchTestimonials = async () => {
    try {
      const q = query(testimonialsRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // 🔥 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 SUBMIT TESTIMONIAL
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(testimonialsRef, {
        name: formData.name,
        role: formData.role,
        text: formData.text,
        createdAt: serverTimestamp()
      });

      setFormData({ name: "", role: "", text: "" });

      // Refresh testimonials after adding
      await fetchTestimonials();

      alert("Testimonial submitted successfully!");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      alert("Error submitting testimonial");
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Client Testimonials | Ambisec Nominees Limited</title>
        <meta name="description" content="See what our clients say about Ambisec Nominees Limited." />
      </Helmet>

      {/* HERO */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Hero2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container className="text-white text-center">
          <Slide direction="up" triggerOnce>
            <h1 className="fw-bold">Real Experiences. Real Results.</h1>
            <Fade triggerOnce>
              <p className="lead">
                See what our clients say about Ambisec Nominees Limited.
              </p>
            </Fade>
          </Slide>
        </Container>
      </div>

      {/* SUBMIT FORM */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#3e729a" }}>
          Submit a Testimonial
        </h2>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name / Company</Form.Label>
                    <Form.Control
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Testimonial</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="text"
                      value={formData.text}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Testimonial"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* TESTIMONIALS CAROUSEL */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3e729a" }}>
            Client Testimonials
          </h2>

          <Carousel fade interval={5000}>
            {testimonials.map((t) => (
              <Carousel.Item key={t.id}>
                <div className="d-flex justify-content-center">
                  <Card className="text-center shadow-sm border-0" style={{ maxWidth: "600px" }}>
                    <Card.Body>
                      <Card.Text style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                        “{t.text}”
                      </Card.Text>
                      <hr />
                      <h6 className="fw-bold mb-0">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;