import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import Login from './sub-components/Login';
import SignUp from './sub-components/SignUp';

export const LandingPage = () => {
    const token = getCookieValue(ACCESS_TOKEN);
    useEffect(() => {
        console.log("yo this shit")
        console.log(token)
    })
    if (token) { return <Redirect to="/feed"></Redirect>; };
    console.log(token)
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
