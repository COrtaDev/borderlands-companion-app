import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN, LOG_OUT } from '../../actions/auth';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const logOut = (e) => {
        document.cookie = `${ACCESS_TOKEN}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
        dispatch({ type: LOG_OUT });
    };
    const { loggedOut } = useSelector(state => state.auth);
    if (loggedOut) { return null; }
    else { return (<li><button id='logout' style={{}} type='button' onClick={logOut}>Log Out</button></li>) }
}
export default LogoutButton;
