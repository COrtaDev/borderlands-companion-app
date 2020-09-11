import React from "react";
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth'

export const Home = () => {
    const token = getCookieValue(ACCESS_TOKEN);

    if (token) { return <Redirect to="/feed"></Redirect>; };

    return (
        <>
            <span>
                <div><h1>Welcome to the BL3 Compaion App!</h1></div>
                <a href='/landing'><button>Proceed to Login/Sign up</button></a>
            </span>
        </>
    )
}

export default Home;
