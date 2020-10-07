import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ITEM_MANUFACTURER, filterManufacturers } from '../../actions/lootDrops';
import { Button, DropdownButton, ButtonGroup, } from 'react-bootstrap';

const SelectManufacturer = (props) => {
    const dispatch = useDispatch();
    let { itemType, itemName, itemElement } = useSelector(state => state.lootDrops);
    const [itemManufacturer, setItemManufacturer] = useState(null)
    const [manufacturerButtonVariant, setManufacturerButtonVariant] = useState("danger")
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    //This is much shorter version of the same logic behind the select item type dropdown...
    if (!itemType) itemType = '';
    const handleManufacturerSelect = (e) => {
        setConfirmButtonVariant('primary');
        setManufacturerButtonVariant('success');
        setItemManufacturer(e);
    }
    const handleSelectManufacturer = (e) => {
        // Once the user confirms the selection the itemType is dispatched to the store
        if (!itemManufacturer) return window.alert("Please Select an Item Manufacturer!")
        dispatch({ type: SET_ITEM_MANUFACTURER, itemManufacturer: itemManufacturer })
        props.onHide();
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} variant={manufacturerButtonVariant}
                    title={`${itemType} Manufacturers`} id="bg-nested-dropdown"
                    className="weapon-type" onSelect={handleManufacturerSelect}>
                    {filterManufacturers(itemType, itemName, itemElement)}
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectManufacturer}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectManufacturer;
