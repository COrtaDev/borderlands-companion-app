import React, { useState, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ITEM_ELEMENT } from '../../actions/lootDrops';
import { Button, DropdownButton, Dropdown, ButtonGroup, } from 'react-bootstrap';
import { items } from '../modal-assets/elements';
const SelectElement = (props) => {
    const dispatch = useDispatch();
    let { itemType, itemName } = useSelector(state => state.lootDrops);
    const [itemElement, setItemElement] = useState(null)
    const [elementButtonVariant, setElementButtonVariant] = useState("danger")
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    const [title, setTitle] = useState('Select item element')
    //This is much shorter version of the same logic behind the select item type dropdown...
    // if (!itemType) itemType = '';
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
    let DropdownItems = [];
    const allElements = ["Shock", "Fire", "Corrosive", "Cryo", "Radiation", "Any", "None",]
    if (itemName) {
        const item = items.filter((item) => item.name === itemName)
        const [elements] = item
        DropdownItems = elements.possibleElements.map((element) => <Dropdown.Item key={element} eventKey={element}>{element}</Dropdown.Item>)
    } else {
        DropdownItems = allElements.map((element, i) => <Dropdown.Item key={i} eventKey={element} >{element}</Dropdown.Item>)
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} variant={elementButtonVariant}
                    title={title} id="bg-nested-dropdown"
                    className="weapon-type" onSelect={handleElementSelect}>
                    {DropdownItems}
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectElement}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectElement;
