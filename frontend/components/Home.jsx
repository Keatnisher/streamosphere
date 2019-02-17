import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div>
            <h1>Welcome to Streamosphere!</h1>
            <p>Streamosphere is a web app in which users can store and stream various types of files.</p>
            <button>New</button>
            <input type="file" name="" id="" onChange={this.handleselectedFile} />
            <button onClick={this.handleUpload}>Upload</button>
            <a href="signature1.png" download>
                <img src="signature1.png" alt="One of my signatures" />
            </a> <br />
            <Link to="/login"><button>Login</button></Link>
        </div>
    );
  }
}
