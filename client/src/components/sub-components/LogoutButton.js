import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { ACCESS_TOKEN, LOG_OUT, getCookieValue } from '../../actions/auth';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN)

    const logOut = () => {
        const deletableCookie = `${ACCESS_TOKEN}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
        document.cookie = deletableCookie
        dispatch({ type: LOG_OUT });
        window.location.reload()
    };

    if (!token) { return null; }
    else { return (<><Button variant="dark" id='logout' type='button' onClick={logOut}>Log Out</Button></>) }
}
export default LogoutButton;
