import React from "react";
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth'
import Login from './sub-components/Login';
import SignUp from './sub-components/SignUp';

export const LandingPage = () => {
    const token = getCookieValue(ACCESS_TOKEN);

    if (token) { return <Redirect to="/feed"></Redirect>; };

    return (
        <>
            <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <div><SignUp /></div>
                <div><Login /></div>
            </span>
        </>
    );
};

export default LandingPage;
