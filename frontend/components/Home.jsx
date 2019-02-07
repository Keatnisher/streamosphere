import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div>
            <h1>Welcome to Streamosphere!</h1>
            <p>Streamosphere is a web app in which users can store and stream various types of files.</p>
            <Link to="/login"><button>Login</button></Link>
        </div>
    );
  }
}
