import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import barbara from "../assets/barbara.jpg";
import odili from "../assets/odili.jpg";
import meeting from "../assets/meeting.avif"

const boardMembers = [
  {
    name: "Mr. Ambrose Odili Okechukwu - MSC, FCA, FCTI, ABR",
    position: "Chairman",
    image: odili
  },
  {
    name: "Barrister Mrs. Nwamaka Odili, PhD, BL, LLM",
    position: "Managing Director",
    image: barbara
  },
  {
    name: "Mr. Victor Odili, MSC",
    position: "Director",
    image: barbara
  },
  {
    name: "Barrister Mrs. Oge Onyenobode, LLM, BL",
    position: "Head of Operations",
    image: barbara
  },
]

const Board = () => {
  const chairman = boardMembers[0]; // Chairman
  const others = boardMembers.slice(1); // Other members

  return (
    <div>
      {/* Hero with overlay text */}
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
          color: 'white',
          position: 'relative'
        }}
      >
        <Slide direction="down" triggerOnce>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            textAlign: 'center',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          }}>
            Meet Our Team
          </h1>
        </Slide>
      </div>

      <Container style={{ paddingTop: '50px', paddingBottom: '25px' }}>
        {/* Chairman */}
        <Row className="justify-content-center mb-5">
          <Col md={6} lg={4}>
            <Zoom triggerOnce>
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <Image 
                    src={chairman.image} 
                    roundedCircle 
                    fluid 
                    style={{ width: '180px', height: '180px', objectFit: 'cover', marginBottom: '20px' }}
                    alt={chairman.name}
                  />
                  <Card.Title className="fw-bold">{chairman.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{chairman.position}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        </Row>

        {/* Other Directors */}
        <Row className="justify-content-center g-4">
          {others.map((member, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Fade direction="up" triggerOnce delay={idx * 200}>
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body>
                    <Image 
                      src={member.image} 
                      roundedCircle 
                      fluid 
                      style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '20px' }}
                      alt={member.name}
                    />
                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
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