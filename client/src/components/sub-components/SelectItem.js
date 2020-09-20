// this will render a form similar to how we did in login/ signup
import React, { useState } from 'react';
import { Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
const SelectItem = () => {
    const [weaponType, setWeaponType] = useState("Weapon")
    const [buttonVariant, setbuttonVariant] = useState("danger")

    // I would like to render toggle buttons for the user to click the type of item they wish to drop
    // the items are weapon type, class mod, grenade, sheild, or artifact then confirm to close the modal

    // I would like the choice selected to appear in the body of the dropdown button
    // I would also like the confirm button to become active once the user has made a valid selection
    const handleSelect = (e) => {
        const confirmButton = document.getElementById('confirm-item')
        console.log(e)
        setWeaponType(e)
        setbuttonVariant('success')
        console.log(confirmButton)
        confirmButton.removeAttribute('disabled')
        console.log(confirmButton)
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} variant={buttonVariant} title={weaponType} id="bg-nested-dropdown" className="weapon-type" onSelect={handleSelect}>
                    <Dropdown.Item eventKey="Pistol">Pistol</Dropdown.Item>
                    <Dropdown.Item eventKey="SMG">SMG</Dropdown.Item>
                    <Dropdown.Item eventKey="Shotgun">Shotgun</Dropdown.Item>
                    <Dropdown.Item eventKey="AR">AR</Dropdown.Item>
                    <Dropdown.Item eventKey="Sniper">Sniper</Dropdown.Item>
                    <Dropdown.Item eventKey="RPG">RPG</Dropdown.Item>
                </DropdownButton>
                <Button>Shield</Button>
                <Button>Grenade Mod</Button>
                <Button>Artifact</Button>
                <DropdownButton as={ButtonGroup} title="Class Mod" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Amara</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Fl4k</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Moze</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Zane</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </>
    )
}
export default SelectItem;
