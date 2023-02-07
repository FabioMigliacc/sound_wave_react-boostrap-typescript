import React from 'react'
import landing from '../assets/landing-page-girl.png'
import { Container, Row, Col, Image } from "react-bootstrap";
import JoinButton from '../components/JoinButton'

export const FellTheMusic = () => {
    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <img src={landing} alt='' className='img-thumbnail' />
                </Col>
                <Col xs={4} className='text-white'>
                    <h1> Feel The Music</h1>
                    <p> Stream over 20 thousand songs with one click! </p>
                    <JoinButton/>
                </Col>
            </Row>
        </Container>
    )
}

export default FellTheMusic


