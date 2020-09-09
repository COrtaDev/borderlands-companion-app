import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../actions/auth';

const SignUp = () => {
    const { token } = useSelector(state => state.auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitSignUp = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(signUp(name, email, password));
    };

    const setField = (event) => {
        const name = event.target.name;
        if (name === 'name') {
            setName(event.target.value);
        } else if (name === 'email') {
            setEmail(event.target.value);
        } else if (name === 'password') {
            setPassword(event.target.value);
        };
    };

    // if (token) {
    //     return <Redirect to="/users"></Redirect>;
    // };

    return (
        <>
            <form action="sign-up" method="POST" onSubmit={submitSignUp}>
                <span>
                    <label>Email address:</label>
                    <div><input type="email" autoComplete="email" name="email" required value={email} onChange={setField} /></div>
                </span>
                <span>
                    <label>Create User Name:</label>
                    <div><input name="name" required value={name} onChange={setField} /></div>
                </span>
                <span>
                    <label>Password:</label>
                    <div><input type="password" autoComplete="new-password" name="password" required value={password} onChange={setField} /></div>
                </span>
                <span>
                    <div><button type="submit">Sign me up!</button></div>
                </span>
            </form>
        </>
    );
};

export default SignUp;
