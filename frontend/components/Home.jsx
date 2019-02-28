import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sph from '.././images/sphere.jpg';
import sph1 from '.././images/csSphere.jpg';
import '.././layouts/MainLayout.css';

export class Home extends Component {
  displayName = Home.name

    render() {
        const styles = {
            body: {
                backgroundColor: 'lightblue',
            },
            div: {
                textAlign: 'center',
            },
            image1: {
                width: '200px',
                height: '200px',
                float:'left'
                
            },
            image2: {
                display: 'block',
                marginleft: 'auto',
                marginright: 'auto',
                width:'50%',

            }

        };
        return (
            <body>
                <Link to="/login"><button>Login</button></Link> 
                <div class="imgSet1"></div> <br />                                                                                                
                <div class="imgSet2"></div>
                
          </body>       
    );
  }
}
