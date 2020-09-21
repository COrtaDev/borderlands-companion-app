// this will render a form similar to how we did in login/ signup
import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { Button, DropdownButton, Dropdown, ButtonGroup, } from 'react-bootstrap';
import { SET_ITEM_TYPE } from '../../actions/lootDrops';
const SelectItem = (props) => {
    const dispatch = useDispatch();

    const [weaponType, setWeaponType] = useState("Weapon")
    const [classModType, setClassModType] = useState("Class Mod")
    const [itemType, setItemType] = useState(null)

    const [weaponButtonVariant, setWeaponButtonVariant] = useState("danger")
    const [shieldButtonVariant, setShieldButtonVariant] = useState("danger")
    const [grenadeButtonVariant, setGrenadeButtonVariant] = useState("danger")
    const [artifactButtonVariant, setArtifactButtonVariant] = useState("danger")
    const [classButtonVariant, setClassButtonVariant] = useState("danger")
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    // const { selectItemType } = props;
    console.log(itemType)
    console.log(props)
    // const [itemType, setItemType]=useState()
    // I would like to render toggle buttons for the user to click the type of item they wish to drop
    // the items are weapon type, class mod, grenade, sheild, or artifact then confirm to close the modal

    // I would like the choice selected to appear in the body of the dropdown button
    // I would also like the confirm button to become active once the user has made a valid selection

    // When the user changes the selection, the UI must update.
    // the dropdow buttons must go back to default state.

    // Once the user confirms the selection the itemType is dispatched to the store

    // We invoked, we would like to change all buttons to grey, enable confirm button and make it blue
    const changeButtons = () => {
        // const confirmButton = document.getElementById('confirm-item');
        setWeaponType("Weapon");
        setClassModType("Class Mod");
        setWeaponButtonVariant('secondary');
        setShieldButtonVariant('secondary');
        setGrenadeButtonVariant('secondary');
        setArtifactButtonVariant('secondary');
        setClassButtonVariant('secondary');
        // confirmButton.removeAttribute('disabled');
        setConfirmButtonVariant('primary');
    }
    const handleWeaponSelect = (e) => {
        changeButtons();
        setWeaponType(`Weapon: ${e}`);
        setWeaponButtonVariant('success');
        setItemType(e);
    }
    const handleShieldSelect = (e) => {
        changeButtons();
        setShieldButtonVariant('success');
        setItemType('Shield');
    }
    const handleGrenadeSelect = (e) => {
        changeButtons();
        setGrenadeButtonVariant('success');
        setItemType('Grenade');
    }
    const handleArtifactSelect = (e) => {
        changeButtons();
        setArtifactButtonVariant('success');
        setItemType('Artifact');
    }
    const handleClassSelect = (e) => {
        changeButtons();
        setClassModType(`${e} Class Mod`);
        setClassButtonVariant('success');
        setItemType(e);
    }
    const handleSelectItem = (e) => {
        if (!itemType) return window.alert("Please Select an Item Type!")
        dispatch({ type: SET_ITEM_TYPE, itemType: itemType })
        // console.log(itemType)
        console.log('I want to confirm this is happening')
        props.onHide();
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} variant={weaponButtonVariant}
                    title={weaponType} id="bg-nested-dropdown"
                    className="weapon-type" onSelect={handleWeaponSelect}>
                    <Dropdown.Item eventKey="Pistol">Pistol</Dropdown.Item>
                    <Dropdown.Item eventKey="SMG">SMG</Dropdown.Item>
                    <Dropdown.Item eventKey="Shotgun">Shotgun</Dropdown.Item>
                    <Dropdown.Item eventKey="AR">AR</Dropdown.Item>
                    <Dropdown.Item eventKey="Sniper">Sniper</Dropdown.Item>
                    <Dropdown.Item eventKey="RPG">RPG</Dropdown.Item>
                </DropdownButton>
                <Button variant={shieldButtonVariant} onClick={handleShieldSelect}>Shield</Button>
                <Button variant={grenadeButtonVariant} onClick={handleGrenadeSelect}>Grenade Mod</Button>
                <Button variant={artifactButtonVariant} onClick={handleArtifactSelect}>Artifact</Button>
                <DropdownButton as={ButtonGroup} variant={classButtonVariant}
                    title={classModType} id="bg-nested-dropdown"
                    className="class-type" onSelect={handleClassSelect}>
                    <Dropdown.Item eventKey="Amara">Amara</Dropdown.Item>
                    <Dropdown.Item eventKey="Fl4k">Fl4k</Dropdown.Item>
                    <Dropdown.Item eventKey="Moze">Moze</Dropdown.Item>
                    <Dropdown.Item eventKey="Zane">Zane</Dropdown.Item>
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectItem}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectItem;
