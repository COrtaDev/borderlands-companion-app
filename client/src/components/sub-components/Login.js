import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/auth';

const Login = () => {
    const { token } = useSelector(state => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitLogin = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(login(email, password))
    };

    const setField = (e) => {
        const name = e.target.name;
        if (name === 'email') {
            setEmail(e.target.value);
        } else if (name === 'password') {
            setPassword(e.target.value);
        };
    };

    const loginAsDemoUser = (e) => {
        setEmail("DemoUserEmail@demo.com");
        setPassword("demopassword");
        dispatch(login(email, password))
    }

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
                <span style={{ display: 'flex', flexDirection: 'row' }}>
                    <div><button>Login</button></div>
                    <div><button onClick={loginAsDemoUser}>Login As Demo User</button></div>
                </span>
            </form>

        </>
    );
};



export default Login
