import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sig from '.././images/signature1.png';
import sph from '.././images/sphere.jpg';
import home from '.././layouts/Home.css';

export class Home extends Component {
  displayName = Home.name

  render() {
      return (
          <body style={home.body}>
              <div style={home.div}>
                  <h1>Welcome to Streamosphere!</h1>
                  <p>Streamosphere is a web app in which users can store and stream various types of files.</p>
                  <img src={sph} alt="a gray sphere" width="50%" height="50%" />
                  <button>New</button>
                  <input type="file" name="upload1" id="1" onChange={this.handleselectedFile} />
                  <button onClick={this.handleUpload}>Upload</button>                                                 
                  <Link to="/login"><button>Login</button></Link>
              </div>
          </body>       
    );
  }
}
