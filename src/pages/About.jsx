import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { Fade, Slide } from 'react-awesome-reveal'
import MissionImg from '../assets/Mission2.png'
import VisionImg from '../assets/Vission2.png'
import ValuesImg from '../assets/valuesImg.png'
import aboutbg from "../assets/aboutbg2.jpg"; // Your background image

const About = () => {
  const cardsData = [
    {
      title: "Ambisec Nominees Limited",
      text: (
        <>
          <strong>Ambisec Nominees Limited</strong> is a professional company
          secretarial and corporate governance firm incorporated on
          <strong> 18 July 2003</strong> under the laws of the Federal Republic
          of Nigeria. The firm provides company secretarial, nominee services,
          and corporate legal services to businesses operating within Nigeria.
        </>
      ),
    },
    {
      title: "Headquarters & Services",
      text: (
        <>
          Headquartered in <strong>Lagos, Nigeria</strong>, Ambisec Nominees
          Limited delivers tailored corporate governance, compliance, and
          business establishment solutions to over <strong>100 private entities</strong>
          across diverse sectors of the Nigerian economy. Our services support both
          foreign investors seeking entry into Nigeria and local companies requiring
          dependable governance and regulatory compliance support.
        </>
      ),
    },
    {
      title: "Our Approach",
      text: (
        <>
          We distinguish ourselves by rejecting a one-size-fits-all approach.
          Instead, we provide <strong>bespoke solutions</strong> aligned with
          each client’s business objectives, regulatory environment, and risk
          profile. Our approach combines <strong>global best practices</strong> 
          with deep local expertise to ensure sustainable compliance,
          operational efficiency, and long-term value.
        </>
      ),
    },
  ];

  return (
    <div className='bg-light text-white'>
      {/* Hero Section with Background Image */}
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          height: '60vh',
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
        {/* Overlay Text */}
        <Container className="position-relative text-center">
          <h1 style={{ fontSize: '3rem', fontWeight: '700', color: 'white' }}>
            Welcome to Ambisec Nominees Limited
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'white', maxWidth: '700px', margin: '0 auto' }}>
            Delivering outstanding corporate governance, company secretarial, and legal services across Nigeria.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        {/* Page Title */}
        <Slide direction="down" triggerOnce>
          <Row className="mb-5">
            <Col>
              <h2 className="pt-5 fw-bold text-center" style={{ color: '#3e729a', fontSize: '2.5rem' }}>
                WHO WE ARE
              </h2>
            </Col>
          </Row>
        </Slide>

        {/* Company Overview Cards (Equal Height) */}
        <Row className="mb-5 g-4" style={{ alignItems: 'stretch' }}>
          {cardsData.map((card, idx) => (
            <Col md={4} key={idx} className="d-flex">
              <Fade direction="up" triggerOnce delay={idx * 200} className="w-100">
                <Card className="shadow-sm text-dark flex-fill d-flex flex-column">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold mb-3">{card.title}</Card.Title>
                    <Card.Text style={{ fontSize: '1.1rem' }} className="flex-grow-1">
                      {card.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>

        {/* Mission Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Fade direction="left" triggerOnce>
              <Image src={MissionImg} alt="Mission" fluid className="rounded shadow"/>
            </Fade>
          </Col>
          <Col md={6}>
            <Slide direction="right" triggerOnce>
              <h3 className="fw-bold mb-3" style={{fontSize: '2rem', color: '#3e729a'}}>Our Mission</h3>
              <p className='text-black' style={{fontSize: '1.2rem'}}>
                To partner with our clients in delivering outstanding corporate
                governance and legal services that drive the realization of their
                goals and ambitions.
              </p>
            </Slide>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <Fade direction="right" triggerOnce>
              <Image src={VisionImg} alt="Vision" fluid className="rounded shadow"/>
            </Fade>
          </Col>
          <Col md={6}>
            <Slide direction="left" triggerOnce>
              <h3 className="fw-bold mb-3" style={{fontSize: '2rem', color: '#3e729a'}}>Our Vision</h3>
              <p className='text-black' style={{fontSize: '1.2rem'}}>
                To establish a leading, integrated corporate governance firm
                renowned for delivering innovative and comprehensive solutions to
                corporate governance challenges.
              </p>
            </Slide>
          </Col>
        </Row>

        {/* Core Values Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Fade direction="left" triggerOnce>
              <Image src={ValuesImg} alt="Core Values" fluid className="rounded shadow"/>
            </Fade>
          </Col>
          <Col md={6}>
            <Slide direction="right" triggerOnce>
              <h3 className="fw-bold mb-3" style={{fontSize: '2rem', color: '#3e729a'}}>Our Core Values</h3>
              <ul style={{fontSize: '1.2rem', lineHeight: '2', color: 'black'}}>
                <li>Honesty and Integrity</li>
                <li>Outstanding Service Delivery</li>
                <li>Professional Care and Excellence</li>
                <li>Teamwork and Collaboration</li>
                <li>Dedication to Client Success</li>
              </ul>
            </Slide>
          </Col>
        </Row>

        {/* Target Clients */}
        <Slide direction="up" triggerOnce>
          <div className="mb-5">
            <h3 className="fw-bold mb-3" style={{ color: '#3e729a', fontSize: '2rem' }}>Target Clients</h3>
            <ul style={{fontSize: '1.2rem', lineHeight: '2', color: 'black'}}>
              <li>Foreign investors and expatriates seeking to establish businesses in Nigeria</li>
              <li>Local companies requiring company secretarial, compliance, and governance support</li>
              <li>Companies requiring advisory services in corporate legal and other consultancy</li>
            </ul>
          </div>
        </Slide>
      </Container>
    </div>
  )
}

export default About