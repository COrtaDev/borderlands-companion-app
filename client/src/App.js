import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
// import UserList from './components/UsersList';
import LandingPage from './components/LandingPage';

import { hasAccessToken } from "./actions/auth";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hasAccessToken());
    });
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/landing" activeclass="active">Landing</NavLink></li>
                    {/* <li><NavLink to="/users" activeclass="active">Users</NavLink></li> */}
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/landing" component={LandingPage} />
                {/* <Route path="/users" component={UserList} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
