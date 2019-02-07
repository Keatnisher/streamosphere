import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <label> New username: <input type="text" /> <br />
                        <label> New password: <input type="password" /> <br />
                            <Link to="/AccountHome"><button type="Submit">Submit</button></Link>
                        </label>
                    </label>
                </form>
            </div>
        );
    }
}