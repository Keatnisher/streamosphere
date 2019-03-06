import React, { Component } from 'react';
import { Route } from 'react-router';


class App extends Component {
  render() {
    return (
		<Layout>
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/AccountHome' component={AccountHome} />
		</Layout>
    );
  }
}

export default App;
