import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class AccountHome extends Component {
    render() {
        return (
            <div>
                <input type="file" name="fileToUpload" id="fileToUpload"> </input> <br />
                <a href="../../public/images/signature1.png" download>
                    <img src="../../public/images/signature1.png" alt="One of my signatures" />
                </a>
                <Link to = "/">Home</Link>
            </div>
        );
    }
}