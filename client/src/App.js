import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hasAccessToken } from './actions/auth';
import Landing from './components/Landing';
import Portal from './components/Portal';
import PortalModal from './components/modals/PortalModal';
import LogoutButton from './components/sub-components/LogoutButton';
import LootDropMockup from './components/sub-components/LootDropMockup';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const dispatch = useDispatch();
    const { userId, userName } = useSelector(state => state.auth);
    if (!userId) { dispatch(hasAccessToken()) }
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Landing</NavLink></li>
                    <li><NavLink to="/portal" activeclass="active">Login/Signup Portal</NavLink></li>
                    <li><NavLink to="/home" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/lootdrop" activeclass="active">Loot Drop</NavLink></li>
                    <li><NavLink to="/portalmodal" activeclass="active">Portal Modal</NavLink></li>
                    <LogoutButton />
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/portal" component={Portal} />
                <Route path="/home"><Home userId={userId} userName={userName} /></Route>
                <Route path="/lootdrop"><LootDropMockup userId={userId} userName={userName} /></Route>
                <Route path="/portalmodal" component={PortalModal}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
