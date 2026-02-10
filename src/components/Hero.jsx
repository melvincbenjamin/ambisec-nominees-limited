import { Container, Carousel, Row, Col, Card } from 'react-bootstrap'
import { Fade, Slide } from 'react-awesome-reveal'
import Hero1 from '../assets/Hero1.jpg'
import Hero2 from '../assets/Hero2.jpg'

const Home = () => {
  const services = [
    {
      title: "Corporate Secretarial Services",
      items: [
        "Board and general meeting coordination",
        "Preparation of agendas, minutes, and resolutions",
        "Maintenance of statutory registers and records",
        "Filing of annual returns and post-incorporation statutory filings",
        "Ongoing regulatory liaison with the Corporate Affairs Commission (CAC) and other regulators"
      ]
    },
    {
      title: "Business Establishment & Regulatory Compliance",
      items: [
        "Company incorporation and post-incorporation filings",
        "Foreign investment approvals and registrations",
        "Statutory compliance with Nigerian corporate and regulatory laws",
        "Advisory on operational and regulatory requirements"
      ]
    },
    {
      title: "Corporate Governance & Advisory Services",
      items: [
        "Board evaluations and governance reviews",
        "Corporate governance advisory services",
        "Board and management training programs",
        "Support in navigating complex legal and regulatory environments"
      ]
    },
    {
      title: "Nominee & Specialized Support Services",
      items: [
        "Nominee director and shareholder services",
        "Corporate representation services",
        "Insolvency and business restructuring support",
        "Advisory services for distressed or transitioning businesses"
      ]
    }
  ]

  return (
    <>
      {/* HERO SLIDER */}
      <Carousel fade controls indicators interval={5000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${Hero1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              minHeight: '70vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container className="text-white text-center">
              <Slide direction="down" triggerOnce>
                <h1 className="fw-bold mb-4">Welcome to Ambisec Nominees Limited</h1>
              </Slide>
              <Fade cascade damping={0.3} triggerOnce>
                <p className="lead">
                  Ambisec Nominees Limited is a professional company secretarial and corporate governance firm
                  incorporated on 18 July 2003 under the laws of the Federal Republic of Nigeria.
                </p>
              </Fade>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Hero2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '70vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container className="text-white text-center">
              <Slide direction="up" triggerOnce>
                <h1 className="fw-bold mb-4">Trusted Corporate Governance Experts</h1>
              </Slide>
              <Fade cascade damping={0.3} triggerOnce>
                <p className="lead">
                  We deliver bespoke corporate governance, compliance, and nominee services tailored
                  to both foreign investors and local businesses across Nigeria.
                </p>
              </Fade>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* SERVICES */}
      <div className="bg-light py-5">
        <Container>
          <Slide direction="up" triggerOnce>
            <h2 className="fw-bold mb-4 text-center" style={{ color: '#3e729a' }}>Our Services</h2>
          </Slide>

          <Row className="g-4">
            {services.map((service, idx) => (
              <Col md={6} key={idx}>
                <Fade direction="up" triggerOnce delay={idx * 200}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title className="fw-bold mb-3">{`${idx + 1}. ${service.title}`}</Card.Title>
                      <ul>
                        {service.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ADDITIONAL SECTIONS (OPTIONAL) */}
      <Container className="py-5">
        <Slide direction="up" triggerOnce>
          <h2 className="fw-bold text-center mb-4" style={{ color: '#3e729a' }}>
            Why Choose Ambisec?
          </h2>
        </Slide>
        <Fade cascade damping={0.2} triggerOnce>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center' }}>
            Ambisec Nominees Limited combines deep local expertise with global best practices to ensure
            your business operates efficiently, meets all regulatory requirements, and grows sustainably.
            Our team of dedicated professionals delivers personalized governance and legal solutions
            that are tailored to your unique business needs.
          </p>
        </Fade>
      </Container>
    </>
  )
}

export default Home