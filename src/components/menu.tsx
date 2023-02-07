
import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'



export default function Menu() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/assets/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    <Navbar.Text > <Link className="text-decoration-none m-2"  to={'/'}>Soundwave</Link> </Navbar.Text>
                </Navbar.Brand>

                
                    <Nav className="ms-auto">
                        <Nav.Link className="text-white text-xl" ><Link  className="text-decoration-none text-white  " to={'/Discover'}>Discover</Link></Nav.Link>
                        <Nav.Link ><Link className="text-decoration-none text-white " to={'/Join'}>Join</Link></Nav.Link>
                    </Nav>
                
            </Container>
        </Navbar>

    )
}

