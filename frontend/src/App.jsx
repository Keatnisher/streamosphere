import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import LandingPage from './components/containers/LandingPage.jsx';
import Register from './components/containers/Register.jsx';
class App extends React.Component {
    render() {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={LandingPage} />
          <Route path='/register' component={Register} />
        </Router>
      );
    }
  }

  export default App;
