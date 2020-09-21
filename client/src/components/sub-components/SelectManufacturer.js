import React, { useState, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ITEM_MANUFACTURER } from '../../actions/lootDrops';
import { Button, DropdownButton, Dropdown, ButtonGroup, } from 'react-bootstrap';
import { manufacturers } from '../modal-assets/manufacturers';
import { possibleGrenadeManufacturers } from '../modal-assets/grenades';
// import { SET_ITEM_TYPE } from '../../actions/lootDrops';
const SelectManufacturer = (props) => {
    const dispatch = useDispatch();
    let { itemType, itemName } = useSelector(state => state.lootDrops);
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
    let DropdownItems = [];
    // console.log(itemType)
    // console.log(itemName)
    if (itemType === "Grenade Mod" && itemName !== '') {
        // console.log("potentialManufacturers")
        const grenade = possibleGrenadeManufacturers.filter((grenade) => grenade.name === itemName);
        const [manufacturers] = grenade;
        // console.log(grenade)
        // console.log(manufacturers)
        // console.log(manufacturers.possibleManufacturers)
        DropdownItems = manufacturers.possibleManufacturers.map((grenade) => <Dropdown.Item eventKey={grenade}>{grenade}</Dropdown.Item>)
    } else if (itemType && itemType !== "Grenade Mod") {
        const potentialItems = manufacturers.filter((item) => item.type === itemType)
        // console.log(potentialItems)
        DropdownItems = potentialItems.map((item) => <Dropdown.Item key={item.id} eventKey={item.manufacturer}>{item.manufacturer}</Dropdown.Item>)
    } else {
        DropdownItems = manufacturers.map((item) => <Dropdown.Item key={item.id} eventKey={item.manufacturer} >{item.namanufacturerme}</Dropdown.Item>)
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} variant={manufacturerButtonVariant}
                    title={`${itemType} Manufacturers`} id="bg-nested-dropdown"
                    className="weapon-type" onSelect={handleManufacturerSelect}>
                    {DropdownItems}
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectManufacturer}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectManufacturer;
