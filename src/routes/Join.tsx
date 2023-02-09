import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Form, Button,  } from 'react-bootstrap'
import styles from './join.module.css'


export const Join = () => {
  return (<>
    <Menu />
   <Container>
    
   <h1 className={styles.h1}>  Join   the <span className={styles.span}>fun.</span> </h1>
    <Form className={styles.form}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" className={styles.textinput} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"   className={styles.textinput} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  className={styles.textinput} />
      </Form.Group>
      
      <Button  variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>
    <Footer />
    </>
)
}

