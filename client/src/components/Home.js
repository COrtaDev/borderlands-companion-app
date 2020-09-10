import React from "react";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Home = () => {
    const { token } = useSelector(state => state.auth);

    if (token) {
        return <Redirect to="/users"></Redirect>;
    };

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
