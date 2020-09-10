import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { ACCESS_TOKEN, LOG_OUT } from "./actions/auth";

import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Feed from './components/Feed';

import { hasAccessToken } from "./actions/auth";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hasAccessToken());
    });
    const logOut = (e) => {
        document.cookie = `${ACCESS_TOKEN}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
        dispatch({ type: LOG_OUT });
    };


    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/landing" activeclass="active">Landing</NavLink></li>
                    <li><NavLink to="/feed" activeclass="active">Feed</NavLink></li>
                    <li><button type='button' onClick={logOut}>Log Out</button></li>
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
