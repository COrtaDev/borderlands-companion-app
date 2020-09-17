import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import Login from '../components/sub-components/Login';
import SignUp from '../components/sub-components/SignUp';
import PortalModalSplash from '../components/modals/PortalModal';
import 'bootstrap/dist/css/bootstrap.min.css';
// here I am defining the modal to be rendered when you login
const PortalModal = (props) => {
    console.log(props)
    if (props.login) {
        return (
            <>
                <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'black', color: 'whitesmoke' }}>
                        <Modal.Title id='contained-modal-title-vcenter'>
                            Borderlands 3 Companion App
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Login />
                    </Modal.Body>
                    <Modal.Footer>
                        <p>Don't have a account with us yet?</p>
                        <Button onClick={props.onSignup}>Sign up!</Button>
                        <Button onClick={props.onBack}>Go Back</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    } else if (props.signup) {
        return (
            <>
                <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'black', color: 'whitesmoke' }}>
                        <Modal.Title id='contained-modal-title-vcenter'>
                            Borderlands 3 Companion App
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SignUp />
                    </Modal.Body>
                    <Modal.Footer>
                        <p>Already have a account with us?</p>
                        <Button onClick={props.onLogin}>Login</Button>
                        <Button onClick={props.onBack}>Back</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'black', color: 'whitesmoke' }}>
                        <Modal.Title id='contained-modal-title-vcenter'>
                            Borderlands 3 Companion App
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>You loot awaits!</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>
                            Some such content ----------- wide content
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* {portalBody} */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onLogin}>Login</Button>
                        <Button onClick={props.onSignup}>Sign up</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

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
            <span>
                <div><h1>Welcome to the BL3 Compaion App!</h1></div>
                {/* <a href='/portal'><button>Proceed to Login/Sign up</button></a> */}
                <Button variant='primary' onClick={() => setModalShow(true)}>Go to login/signup portal</Button>
            </span>
            <PortalModal
                show={modalShow} login={modalLogin} signup={modalSignup}
                onHide={() => handleHide()}
                onLogin={() => handleLogin()}
                onSignup={() => handleSignup()}
                onBack={handleBack}>
            </PortalModal>
        </>
    )
}

export default Landing;
