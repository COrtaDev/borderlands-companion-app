import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { signUp } from '../../actions/auth';
import { usersUrl } from '../../config';
// usersUrl = 'http://localhost:5000/api/users'
const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
// We define a function to post the signup information to the database
    const signUpUser = async () => {
        // usersUrl = 'http://localhost:5000/api/users/'
        const res = await fetch(usersUrl, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, email, password }),
        });
        if (res.ok) {
            const data = await res.json();
            data.token = data.token.slice(2, data.token.length - 1);
            document.cookie = `${ACCESS_TOKEN}=${data.token}`;
            dispatch({ type: SIGN_IN, token: data.token, user: data.user });
        }
    }

    const submitSignUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        signUpUser(userName, email, password);
    };

    const setField = (e) => {
        const name = e.target.name;
        if (name === 'userName') { setUserName(e.target.value); }
        else if (name === 'email') { setEmail(e.target.value); }
        else if (name === 'password') { setPassword(e.target.value); };
    };

    return (
        <>
            <form action="" method="POST" onSubmit={submitSignUp}>
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
