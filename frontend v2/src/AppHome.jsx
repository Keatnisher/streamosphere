import React, { Component } from 'react';
import './App.css';
import sph from './images/sphere.jpg';
import sph1 from './images/csSphere.jpg';
import sph2 from './images/signature1.png';

class AppHome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Welcome to Streamosphere! </h1>
        </header>
		<section>
			<img src={sph} alt="a gray sphere" id="img1" />
			<img src={sph1} alt="a gray sphere" id="img2" />
			<img src={sph2} alt="a gray sphere" id="img3" />
		</section>
		
      </div>
    );
  }
}

export default App;
