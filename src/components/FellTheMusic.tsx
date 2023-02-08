import React from 'react'
import landing from '../assets/landing-page-girl.png'
import { Row, Col } from "react-bootstrap";
import JoinButton from '../components/JoinButton'

export const FellTheMusic = () => {
    return (
        
        <Row  style={{ width: 'auto', height: 'auto', marginLeft:'20px', marginTop:'200px'}}  className="d-flex align-items-center justify-content-">
            <Col xl={4} className="d-none d-lg-block">
                <img src={landing} alt='' width={350} />
            </Col>
            <Col xl={8} xs={8} className=' text-white ' >
                <h1 className='xs display-1'> Feel The Music</h1>
                <p> Stream over 20 thousand songs with one click! </p>
                <JoinButton/>
            </Col>
        </Row>
    
    )
}

export default FellTheMusic


