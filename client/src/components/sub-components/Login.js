import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACCESS_TOKEN, SIGN_IN } from '../../actions/auth';
import { loginUrl } from '../../config'; //For reference: loginUrl = 'http://localhost:5000/api/users/login'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    /*
     We define a function to post the login information to the database
    based on the state of the component and update the store with the user's information
    */
    const loginUser = async (email, password) => {
        // loginUrl = 'http://localhost:5000/api/users/login'
        const res = await fetch(loginUrl, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            const data = await res.json();
            // console.log(data.token);
            // const token = await data.token;
            // console.log(token)
            const cookie = `${ACCESS_TOKEN}=${data.token}`;
            document.cookie = cookie;
            dispatch({ type: SIGN_IN, token: data.token, user: data.user })
        }
    };
    /*
    Here we define a function to sumbit the login information from the
    state of the component which will fire once they click the 'submit' button
    */
    const submitLogin = (e) => {
        e.preventDefault();
        loginUser(email, password);
    };
    /*
    Here we define a function to login as the demo user which
    fires when the user clicks the 'login as demo user' button
    */
    const setDemoUser = (e) => {
        setPassword("demopassword")
        setEmail("DemoUserEmail@demo.com")
        const loginButton = document.getElementById('login')
        loginButton.removeAttribute('disabled');
    }
    /*
    Here we define a funtion to update the state of the
    component with the userName and password as the user types.
    */
    const setField = (e) => {
        const loginButton = document.getElementById('login')
        const name = e.target.name;
        if (name === 'email') { setEmail(e.target.value); }
        else if (name === 'password') { setPassword(e.target.value); }
        if (name !== undefined && password !== undefined) { loginButton.removeAttribute('disabled'); }
        else { loginButton.setAttribute('disabled'); }
    };
    /*
    We return a form for the user to login as an existing user or using a demo login account
    */
    return (
        <>
            <form action="" method="POST" onSubmit={submitLogin}>
                <span>
                    <label>Email address:</label>
                    <div><input type="email" autoComplete="email" name="email" required value={email} onChange={setField} /></div>
                </span>
                <span>
                    <label>Password:</label>
                    <div><input type="password" autoComplete="current-password" name="password" required value={password} onChange={setField} /></div>
                </span>
                <span style={{ display: 'flex', flexDirection: 'row' }}>
                    <div><button id="login" type='submit' disabled>Login</button></div>
                    <div><button type='button' onClick={setDemoUser}>Enter As Demo User</button></div>
                </span>
            </form>
        </>
    );
};

export default Login;
