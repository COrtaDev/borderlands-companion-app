import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/auth';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitSignUp = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(signUp(userName, email, password));
    };

    const setField = (event) => {
        const name = event.target.name;
        if (name === 'userName') {
            setUserName(event.target.value);
        } else if (name === 'email') {
            setEmail(event.target.value);
        } else if (name === 'password') {
            setPassword(event.target.value);
        };
    };

    return (
        <>
            <form action="" method="POST" onSubmit={submitSignUp}>
            {/* <input type="hidden" name="csrf_token" value="{{ csrf_token() }}"/> */}
                <span>
                    <label>Email address:</label>
                    <div><input type="email" autoComplete="email" name="email" required value={email} onChange={setField} /></div>
                </span>
                <span>
                    <label>Create User Name:</label>
                    <div><input name="userName" autoComplete="userName" required value={userName} onChange={setField} /></div>
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
