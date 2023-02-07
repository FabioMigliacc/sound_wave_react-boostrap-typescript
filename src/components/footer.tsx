import React from 'react'
import {AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai'
import { Container,  Nav, Navbar } from 'react-bootstrap'

export default function Footer ()  {
  return (
    <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="">
                        <Nav.Link className="text-white text-xl" href='#'>About Us</Nav.Link>
                        <Nav.Link className="text-white text-xl" href='#'>Contact</Nav.Link>
                    </Nav>

                
                    <Nav className="ms-auto">
                        <Nav.Link className="text-white text-xl" href='#'>< AiFillTwitterCircle/>Twitter</Nav.Link>
                        <Nav.Link className="text-white text-xl" href='#'>< AiFillFacebook/>Facebook</Nav.Link>
                    </Nav>
                
            </Container>
        </Navbar>
  )
}
