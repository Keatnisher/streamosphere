//libaries and components to be used in the Sign In Component
import React, { Component } from 'react';
import { withFirebase } from '../firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../layouts/LandingPage.css'
import * as consts from "../../Constants";

//email and password input has nothing
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    async getEmail(email) {
        let url = consts.API_URL + '/user/'+email;
        let userId = await fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data.id;
        });
        return userId
    }

    //function to submit user input and redirect to the account's home page
    onSubmit = event => {
        let that = this;
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(async function(){
                // may need to change this with auth
                that.setState({ ...INITIAL_STATE });
                let userId = await that.getEmail(email);
                localStorage.setItem('userid', userId);
                that.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };
    
    //get user input
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    //view for Sign In Component
    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className="landingBackground">
                <Button className="signInButton" variant="light"><Link to={ROUTES.LANDING}>Sign Up</Link></Button>
                <h1 className="landingBanner" >Welcome to Streamosphere</h1>
            <Form className="signUpForm"
                  onSubmit={this.onSubmit}>
                <h1 className="signUpBanner">
                    Sign In
                </h1>
                <Form.Group controlId="formSignInEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"
                                  value={email}
                                  onChange={this.onChange}
                                  type="email"
                                  placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formSignInPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password"
                                  value={password}
                                  onChange={this.onChange}
                                  type="password"
                                  placeholder="Password" />
                </Form.Group>
                <Button type="submit"
                        disabled={isInvalid}
                        className="signUpButton"
                        variant="light" >
                    Sign In
                </Button>
                {error && <p>{error.message}</p>}
            </Form>
            </div>
        );
    }
}

{/*//const SignInForm = withRouter(SignInFormBase);*/}

export default withFirebase(SignInFormBase);

{/*//export { SignInForm };*/}
