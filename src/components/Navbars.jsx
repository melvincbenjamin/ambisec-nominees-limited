import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function Navbars() {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation() // to track current route

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Board', path: '/board' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
      style={{ backgroundColor: '#3e729a' }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          className="fw-bold"
        >
          Ambisec Nominees Limited
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                as={Link}
                to={link.path}
                key={link.name}
                onClick={() => setExpanded(false)}
                style={{
                  position: 'relative',
                  transition: 'color 0.3s',
                  color: location.pathname === link.path ? '#ffd700' : 'white', // active link color
                }}
                onMouseEnter={(e) => e.target.style.color = '#f0e68c'} // hover color
                onMouseLeave={(e) =>
                  e.target.style.color =
                    location.pathname === link.path ? '#ffd700' : 'white'
                }
              >
                {link.name}
                {location.pathname === link.path && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '0',
                      width: '100%',
                      height: '3px',
                      backgroundColor: '#ffd700',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars