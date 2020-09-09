import React from "react";
import Login from './sub-components/Login';
import SignUp from './sub-components/SignUp';

export const LandingPage = () => {
    // I would like to render one main splash page. I import the signup and login forms
    // which I have defined as subcomponents.
    return (
        <>
            <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <div><SignUp /></div>
                <div><Login /></div>
            </span>
        </>
    );
};

export default LandingPage;
