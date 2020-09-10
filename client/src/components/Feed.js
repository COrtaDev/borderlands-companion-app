import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Feed = () => {
    const { token } = useSelector(state => state.auth);
    if (!token) {
        return <Redirect to="/"></Redirect>;
    };
    return (
        <>
            <h1>Welcome to your feed Vault Hunter!</h1>
        </>
    );
};

export default Feed;
