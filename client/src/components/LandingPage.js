import React from "react";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from './sub-components/Login';
import SignUp from './sub-components/SignUp';

export const LandingPage = () => {
    const { token } = useSelector(state => state.auth);

    if (token) {
        return <Redirect to="/feed"></Redirect>;
    };

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
