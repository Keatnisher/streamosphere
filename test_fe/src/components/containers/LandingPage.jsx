import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './LandingPage.css'

export default class LandingPage extends React.Component {
    render() {
      return (
        <div>
            <Button variant="light" style={{float:"right", padding: 5+"px",
              margin: 10+"px"}}><Link to="/register">Sign Up</Link></Button>
            <h1>Streamosphere</h1>
            <Form class="signInForm" style={{width:512+"px", padding: 16+"px"}}>
                <h2 >Sign In</h2>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
      );
    }
  }

