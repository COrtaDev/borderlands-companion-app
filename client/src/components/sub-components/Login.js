import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/auth';

const Login = () => {
    const { token } = useSelector(state => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitLogin = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(login(email, password))
    };

    const setField = (event) => {
        const name = event.target.name;
        if (name === 'email') {
            setEmail(event.target.value);
        } else if (name === 'password') {
            setPassword(event.target.value);
        };
    };

    if (token) {
        return <Redirect to="/users"></Redirect>
    };

    return (
        <>
            <form action="sign-up" method="POST" onSubmit={submitLogin}>
                <span>
                    <label>Email address:</label>
                    <div><input type="email" autoComplete="email" name="email" required value={email} onChange={setField} /></div>
                </span>
                <span>
                    <label >Password:</label>
                    <div><input type="password" autoComplete="current-password" name="password" required value={password} onChange={setField} /></div>
                </span>
                <div><button>Login</button></div>
            </form>

        </>
    );
};



export default Login
