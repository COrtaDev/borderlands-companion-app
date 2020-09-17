import React from "react";
import { Modal, Button } from 'react-bootstrap'
import Login from '../sub-components/Login';
import SignUp from '../sub-components/SignUp';

const PortalModal = (props) => {
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onLogin}>Login</Button>
                        <Button onClick={props.onSignup}>Sign up</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
};


export default PortalModal;
