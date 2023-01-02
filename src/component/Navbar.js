import React from "react";
import { Container,Nav,Navbar,Offcanvas  } from "react-bootstrap";
import './Navbar.css';
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} sticky="top"   expand={expand} className='head1'  >
          <Container fluid>
            <Navbar.Brand href="#" className="title">The School</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggel' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='Header'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                The School
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="Bodyof">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  className="text"><Link className="text1" to='/'>Home</Link></Nav.Link>
                  <Nav.Link  className="text"><Link className="text1" to='/Service'>Service</Link></Nav.Link>
                  <Nav.Link  className="text"><Link className="text1" to='/About'>About</Link></Nav.Link>
                  <Nav.Link  className="text"><Link className="text1" to='/Portfolio'>Portfolio</Link></Nav.Link>
                  <Nav.Link  className="text"><Link className="text1" to='/OurTeam'>OurTeam</Link></Nav.Link>
                   <Nav.Link  className="text"><Link className="text1" to='/Contact'>Contact</Link></Nav.Link>
                </Nav>
                 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;