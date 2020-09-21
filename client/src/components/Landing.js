import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';

import PortalModal from '../components/modals/PortalModal';
import 'bootstrap/dist/css/bootstrap.min.css';
// here I am defining the modal to be rendered when you login

export const Landing = () => {
    const token = getCookieValue(ACCESS_TOKEN);
    const [modalShow, setModalShow] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    const [modalSignup, setModalSignup] = useState(false);
    // These function handle how the portal modal behaves
    const handleHide = () => {
        setModalShow(false)
        setModalLogin(false)
        setModalSignup(false)
    }
    const handleBack = () => {
        setModalLogin(false)
        setModalSignup(false)
    }
    const handleSignup = () => {
        setModalLogin(false)
        setModalSignup(true)
    }
    const handleLogin = () => {
        setModalLogin(true)
        setModalSignup(false)
    }

    if (token) { return <Redirect to="/home"></Redirect>; };
    // what we need to do is render the first modal then based if they clicked login or signup we should render those modals next.
    return (
        <>
            <div style={{ height: 'auto%', width: '100%' }}>
                <span>
                    {/* <div><h1>Welcome to the BL3 Compaion App!</h1></div> */}
                    <a onClick={() => setModalShow(true)}>
                        <img src="https://splitwise-clone.s3.us-east-2.amazonaws.com/favicon/Krieg's_Mind_BL3.png" style={{ height: '100%', width: '100%' }}></img>
                    </a>
                    {/* <a href='/portal'><button>Proceed to Login/Sign up</button></a> */}
                    {/* <Button variant='primary' onClick={() => setModalShow(true)}>Go to login/signup portal</Button> */}
                </span>
                <PortalModal
                    show={modalShow} login={modalLogin} signup={modalSignup}
                    onHide={() => handleHide()}
                    onLogin={() => handleLogin()}
                    onSignup={() => handleSignup()}
                    onBack={handleBack}>
                </PortalModal>
            </div>
        </>
    )
}

export default Landing;
