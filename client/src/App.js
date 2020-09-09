import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import LandingPage from './components/LandingPage';

import { hasAccessToken } from "./actions/auth";

function App() {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(hasAccessToken());
    // });
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                    <li><NavLink to="/landing" activeclass="active">Landing</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" ><h1>My Home Page</h1></Route>
                <Route path="/users" component={UserList} />
                <Route path="/landing" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
