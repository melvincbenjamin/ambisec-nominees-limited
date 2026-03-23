import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

import MrsOdili from "../assets/MrsOdili.jpeg";
import Odili2 from "../assets/Odili2.jpeg";
import OdiliVictor from "../assets/OdiliVictor.jpeg"
import meeting from "../assets/meeting.avif"
import Roseline from "../assets/Roseline.jpeg"

const boardMembers = [
  {
    name: "Mr. Ambrose Odili Okechukwu - M.Sc., FCA, FCTI, ABR",
    position: "Chairman",
    image: Odili2
  },
  {
    name: "Barrister Mrs. Nwamaka Odili - PhD, BL, LLM",
    position: "Managing Director",
    image: MrsOdili
  },
  {
    name: "Mr. Victor Odili - M.Sc.",
    position: "Director",
    image: OdiliVictor
  },
  {
    name: "Miss Roseline Ohimai - B.Sc.",
    position: "Head of Operations",
    image: Roseline   
  },
]

const Board = () => {
  const chairman = boardMembers[0];
  const others = boardMembers.slice(1);

  return (
    <div>

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
      
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${meeting})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '40vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <Slide direction="down" triggerOnce>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            textAlign: 'center',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
          }}>
            Meet Our Team
          </h1>
        </Slide>
      </div>

      <Container className="py-5">

        {/* Chairman */}
        <Row className="justify-content-center mb-5">
          <Col md={6} lg={4}>
            <Zoom triggerOnce>
              <Card className="shadow-sm text-center border-0">
                <Card.Body>
                  <Image
                    src={chairman.image}
                    roundedCircle
                    fluid
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      marginBottom: "20px"
                    }}
                    alt={chairman.name}
                  />
                  <Card.Title className="fw-bold">{chairman.name}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    {chairman.position}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        </Row>

        {/* Other Members */}
        <Row className="justify-content-center g-4">
          {others.map((member, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Fade direction="up" triggerOnce delay={idx * 200}>
                <Card className="h-100 shadow-sm text-center border-0">
                  <Card.Body>
                    <Image
                      src={member.image}
                      roundedCircle
                      fluid
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        marginBottom: "20px"
                      }}
                      alt={member.name}
                    />
                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                    <Card.Subtitle className="text-muted">
                      {member.position}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  )
}

export default Board