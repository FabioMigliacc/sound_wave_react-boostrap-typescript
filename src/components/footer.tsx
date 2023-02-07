import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';

export default function Footer() {
  return (
    <footer>
      <Navbar >
        <Container>
          <Nav className="">
            <Nav.Link className="text-white text-xl" href='#'>About Us</Nav.Link>
            <Nav.Link className="text-white text-xl" href='#'>Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <img src={twitter} alt='' />
            <Nav.Link className="text-white text-xl" href='#'>Twitter</Nav.Link>
            <img src={facebook} alt='' />
            <Nav.Link className="text-white text-xl" href='#'>Facebook</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </footer>
  )
}
