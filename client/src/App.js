import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hasAccessToken } from './actions/auth';
// import Portal from './components/Portal';
// import ItemDropdown from './components/sub-components/ItemDropdown'
// import PortalModal from './components/modals/PortalModal';
// import LootDropMockup from './components/sub-components/LootDropMockup';
import Landing from './components/Landing';
import LogoutButton from './components/sub-components/LogoutButton';
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
                    {/* <li><NavLink to="/customtoggle" activeclass="active">custom toggle</NavLink></li> */}
                    {/* <li><NavLink to="/portalmodal" activeclass="active">Portal Modal</NavLink></li> */}
                    {/* <li><NavLink to="/lootdrop" activeclass="active">Loot Drop</NavLink></li> */}
                    <li><NavLink to="/" activeclass="active">Landing</NavLink></li>
                    <li><NavLink to="/home" activeclass="active">Home</NavLink></li>
                    <LogoutButton />
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/home"><Home userId={userId} userName={userName} /></Route>
                {/* <Route path="/customtoggle" component={ItemDropdown} /> */}
                {/* <Route path="/lootdrop"><LootDropMockup userId={userId} userName={userName} /></Route> */}
                {/* <Route path="/portalmodal" component={PortalModal}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
