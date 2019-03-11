import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sph from '../images/accImage.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: ''
        };

        
    }
    handleChange(event) {
        this.setState({
            username: event.target.value,
            pass: event.target.value
        })
    }
    handleSubmit(data) {
        this.username = data.input.username,
        this.pass = data.input.pass
    }
    
    
    render() {
        return (
            <div>
                <img src={sph} alt="a sphere" wdith="300" height="300" />
				<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Email address </Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form>
				<Link to="/AccountHome"><Button type="Submit">Submit</Button></Link>
            </div>
        );
    }
}
