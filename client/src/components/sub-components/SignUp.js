import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACCESS_TOKEN, SIGN_IN } from '../../actions/auth';
import { usersUrl } from '../../config';
// usersUrl = 'http://localhost:5000/api/users'
const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // We define a function to post the signup information to the database and dispatch the new users information to the store
    const signUpUser = async (userName, email, password) => {
        // usersUrl = 'http://localhost:5000/api/users/'
        const res = await fetch(usersUrl, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, email, password }),
        });
        /*Here we check to see if we get a 200 response, we then store the generate and auth token
        or the user so they do not have to log backin if they leave the page and return later*/
        if (res.ok) {
            const data = await res.json();
            data.token = data.token.slice(2, data.token.length - 1);
            document.cookie = `${ACCESS_TOKEN}=${data.token}`;
            dispatch({ type: SIGN_IN, token: data.token, user: data.user });
        }
    }
    /*Here we define a function to submit the information from the for
    which will only fire once the user had clicked the 'submit' button.*/
    const submitSignUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        signUpUser(userName, email, password);
    };
    /*Here we define a funtion to update the state of the
    component as the user enters information into the form.*/
    const setField = (e) => {
        const name = e.target.name;
        if (name === 'userName') { setUserName(e.target.value); }
        else if (name === 'email') { setEmail(e.target.value); }
        else if (name === 'password') { setPassword(e.target.value); };
    };
    /* We return a form for the user to enter signup information*/
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
