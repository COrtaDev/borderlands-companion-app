import React from "react";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from "./actions/auth";

import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Feed from './components/Feed';
import LogoutButton from './components/sub-components/LogoutButton'

// import { hasAccessToken } from "./actions/auth";

const App = () => {
    const token = getCookieValue(ACCESS_TOKEN)
    
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/landing" activeclass="active">Landing</NavLink></li>
                    <li><NavLink to="/feed" activeclass="active">Feed</NavLink></li>
                    <LogoutButton />
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/landing" component={LandingPage} />
                <Route path="/feed" component={Feed} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
