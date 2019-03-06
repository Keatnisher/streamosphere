import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LandingPage from './components/containers/LandingPage.jsx'
class App extends React.Component {
    render() {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={LandingPage} />
        </Router>
      );
    }
  }

  export default App;
