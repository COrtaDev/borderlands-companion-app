// This will be the modal that will render the form.
// Depending on what icon is pressed, will render a different verson of the modal.
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import SelectName from '../sub-components/SelectName';

const SelectNameModal = (props) => {
    return (
        <>
            <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
                <Modal.Header closeButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'black', color: 'whitesmoke' }}>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Select Item Name
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p>Select Item Name</p>
                    <p>Choose name:</p>
                    <SelectName />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default SelectNameModal;
