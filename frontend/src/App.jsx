//external resources to be imported for usage for this file
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'
import React from 'react';
import SignUpFormBase from './components/containers/LandingPage.jsx'
import SignInFormBase from './components/containers/SignIn.jsx'
import AccountHome from './components/containers/AccountHome.jsx'
import * as ROUTES from './routes.jsx';
import './layouts/App.css';

class App extends React.Component {
    
    //returns a view component
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <div className="landingBackground">
                    <Route exact path={ROUTES.LANDING} component={SignUpFormBase} />
                    <Route path={ROUTES.HOME} component={AccountHome} />
                    <Route path={ROUTES.SIGN_IN} component={SignInFormBase} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
