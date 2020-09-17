import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import Login from '../components/sub-components/Login';
import SignUp from '../components/sub-components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
// here I am defining the modal to be rendered when you login
const PortalModal = (props) => {
    // const [portalBody, setPortalBody]=useState('')
    const [portalBody, setPortalBody] = useState('')
    console.log(props)
    if (props.login) {
        return (<Login />)
    } else if (props.signup) {
        return (<SignUp />)
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
                        {portalBody}
                        <h4>You loot awaits!</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>
                            Some such content
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
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

    if (token) { return <Redirect to="/home"></Redirect>; };

    return (
        <>
            <span>
                <div><h1>Welcome to the BL3 Compaion App!</h1></div>
                {/* <a href='/portal'><button>Proceed to Login/Sign up</button></a> */}
                <Button variant='primary' onClick={() => setModalShow(true)}>Go to login/signup portal</Button>
            </span>
            <PortalModal
                show={modalShow} login={modalLogin} signup={modalSignup}
                onHide={() => setModalShow(false)}
                onLogin={() => setModalLogin(true)}
                onSignup={() => setModalSignup(true)}>
            </PortalModal>
        </>
    )
}

export default Landing;
