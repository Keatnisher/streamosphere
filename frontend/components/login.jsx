import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: ''
        };

        
    }

    handleChange(event) {
        this.setState([event.target.name], event.target.value)
    }
    handleSubmit(data) {
        this.username = data.input.username,
        this.pass = data.input.pass
    }
    goToHome() {
        return <Redirect to="/AccountHome" />;
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Username: <input type="text" name="username" value={this.state.username.value} onChange={event => this.handleChange(event)} /> <br />
                        <label> Password: <input type="password" name="username" value={this.state.pass.value} onChange={event => this.handleChange(event)} /> <br />
                            <button type="submit" onClick={this.goToHome}> Login </button>
                            <Link to="/register"><button>New> Sign Up Here!</button></Link>
                            <a href="forgot.js">Forgot Password?</a>
                        </label>
                    </label>
                </form>
            </div>
        );
    }
}