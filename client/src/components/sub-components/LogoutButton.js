import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, LOG_OUT, getCookieValue } from '../../actions/auth';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN)

    const logOut = (e) => {
        document.cookie = `${ACCESS_TOKEN}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
        dispatch({ type: LOG_OUT });
        return <Redirect to="/"></Redirect>;
    };

    if (!token) { return null; }
    else { return (<li><button id='logout' type='button' onClick={logOut}>Log Out</button></li>) }
}
export default LogoutButton;
