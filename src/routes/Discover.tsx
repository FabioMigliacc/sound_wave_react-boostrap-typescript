import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Col, Container, Row } from 'react-bootstrap'
import more from '../assets/more.svg'
import albums from '../assets/albums.svg'
import microphone from '../assets/microphone.svg'
import covers from '../assets/covers.jpg'



export const Discover = () => {
    return (

        <section>
            <Container>
                <header>
                    <Menu />
                </header>
                <Row>
                    <Col className='text-white'>
                        <h1> Discover new music </h1>
                        <div><img src={microphone} alt='' />
                            <p>Charts</p></div>
                        <div><img src={albums} alt='' />
                            <p>Albums</p></div>
                        <div><img src={more} alt='' />
                            <p>More</p></div>


                    </Col>
                    <Col>
                        <img src={covers} alt='' />
                    </Col>



                </Row>

                < Footer />
            </Container>
        </section>


    )
}
