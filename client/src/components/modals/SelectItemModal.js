// This will be the modal that will render the form.
// Depending on what icon is pressed, will render a different verson of the modal.
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import SelectItem from '../sub-components/SelectItem';

const SelectItemModal = (props) => {
    console.log(props)
    return (
        <>
            <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
                <Modal.Header closeButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'black', color: 'whitesmoke' }}>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Select Item Type
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p>Please select the type of item:</p>
                    <SelectItem></SelectItem>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onSignup}>Confirm</Button>
                    <Button onClick={props.onBack}>Go Back</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default SelectItemModal;
