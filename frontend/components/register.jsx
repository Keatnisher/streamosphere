import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Register extends Component {
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
    render() {
        return (
            <div>
                <form>
                    <label> New username: <input type="text" name="username" value={this.state.username.value} onChange={event => this.handleChange(event)} /> <br />
                        <label> New password: <input type="password" name="pass" value={this.state.pass.value} onChange={event => this.handleChange(event)} /> <br />
                            <Link to="/AccountHome"><button type="Submit">Submit</button></Link>
                        </label>
                    </label>
                </form>
            </div>
        );
    }
}