import React from 'react';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth'

const Feed = () => {
    const token = getCookieValue(ACCESS_TOKEN);

    if (!token) { return <Redirect to="/"></Redirect> };

    return (
        <>
            <h1>Welcome to your feed Vault Hunter!</h1>
        </>
    );
};

export default Feed;
