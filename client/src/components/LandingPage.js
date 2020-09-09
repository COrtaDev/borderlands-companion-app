import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login, SignUp } from './sub-components';

export const LandingPage = () => {
    // I would like to render one main splash page. I import the signup and login forms
    // which I have defined as subcomponents.
    return (
        <>
            <span>
                <div>
                    <SignUp />
                </div>
                <div>
                    <Login />
                </div>
            </span>
        </>

    )

}

export default LandingPage;
