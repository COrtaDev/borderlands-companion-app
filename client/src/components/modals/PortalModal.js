import React from "react";
import { Modal } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../../actions/auth';
import Login from '../sub-components/Login';
import SignUp from '../sub-components/SignUp';

export const PortalModalSplash = (props) => {
    const token = getCookieValue(ACCESS_TOKEN);
    if (token) { return <Redirect to="/home"></Redirect>; };
    return (
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
                    Some such content
                </p>
                <br></br>
                <br></br>
                <br></br>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onLogin}>Login</Button>
                <Button onClick={props.onSignup}>Sign up</Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default PortalModalSplash;
