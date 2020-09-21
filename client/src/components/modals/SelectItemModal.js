// This is the modal that will render the form.
// Depending on what icon is pressed, will render a different verson of the modal.
import React from 'react';
import { Modal } from 'react-bootstrap';
import SelectItem from '../sub-components/SelectItem';
const SelectItemModal = (props) => {
    // This modal allows us to select the type of item we would like to use in out loot drop
    return (
        <>
            <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
                <Modal.Header closeButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', background: 'black', color: 'whitesmoke' }}>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Select Item Type
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p>Select Item Type</p>
                    <p>Choose one:</p>
                    <SelectItem {...props}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SelectItemModal;
