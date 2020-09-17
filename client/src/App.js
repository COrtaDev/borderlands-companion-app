import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hasAccessToken, getCookieValue, ACCESS_TOKEN } from './actions/auth';
import Landing from './components/Landing';
import Portal from './components/Portal';
import Feed from './components/Feed';
import LogoutButton from './components/sub-components/LogoutButton';
import LootDropMockup from './components/sub-components/LootDropMockup';
import Home from './components/Home';

const App = () => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    const { userId, userName } = useSelector(state => state.auth);
    // console.log(userId)
    if (!userId) {
        dispatch(hasAccessToken())
    }
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Landing</NavLink></li>
                    <li><NavLink to="/portal" activeclass="active">Login/Signup Portal</NavLink></li>
                    <li><NavLink to="/home" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/lootdrop" activeclass="active">Loot Drop</NavLink></li>
                    <LogoutButton />
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/portal" component={Portal} />
                <Route path="/home"><Home userId={userId} userName={userName} /></Route>
                <Route path="/lootdrop"><LootDropMockup userId={userId} userName={userName} /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
