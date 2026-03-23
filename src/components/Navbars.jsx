import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import "../Navbar.css"

function Navbars() {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Board', path: '/board' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleToggle = () => setExpanded(!expanded)
  const handleClose = () => setExpanded(false)

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={handleToggle}
      fixed="top"
      className="custom-navbar"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={handleClose}
          className="brand"
        >
          <img src={logo} alt="Logo" className="brand-logo" />
          <span className="brand-text">Ambisec Nominees</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Nav.Link
                  as={Link}
                  to={link.path}
                  key={link.name}
                  onClick={handleClose}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars