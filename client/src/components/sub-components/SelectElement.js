import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ITEM_ELEMENT } from '../../actions/lootDrops';
import {filterElements} from  '../../actions/filterElements';
import { Button, DropdownButton, ButtonGroup, } from 'react-bootstrap';

const SelectElement = (props) => {
    const dispatch = useDispatch();
    let { itemType, itemName, itemManufacturer } = useSelector(state => state.lootDrops);
    const [itemElement, setItemElement] = useState(null)
    const [elementButtonVariant, setElementButtonVariant] = useState("danger")
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    const [title, setTitle] = useState('Select item element')
    const handleElementSelect = (e) => {
        setTitle(e)
        setConfirmButtonVariant('primary');
        setElementButtonVariant('success');
        setItemElement(e);
    }
    const handleSelectElement = (e) => {
        // Once the user confirms the selection the itemType is dispatched to the store
        if (!itemElement) return window.alert("Please Select an Item Manufacturer!")
        dispatch({ type: SET_ITEM_ELEMENT, itemElement: itemElement })
        props.onHide();
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} variant={elementButtonVariant}
                    title={title} id="bg-nested-dropdown"
                    className="weapon-type" onSelect={handleElementSelect}>
                    {filterElements(itemType, itemName, itemManufacturer)}
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectElement}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectElement;
