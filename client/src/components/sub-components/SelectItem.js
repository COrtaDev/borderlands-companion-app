// this will render a form similar to how we did in login/ signup
import React from 'react';
import { Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
const SelectItem = () => {

    // I would like to render toggle buttons for the user to click the type of item they wish to drop
    // the items are weapon type, class mod, grenade, sheild, or artifact then confirm to close the modal
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} title="Weapon" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Pistol</Dropdown.Item>
                    <Dropdown.Item eventKey="2">SMG</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Shotgun</Dropdown.Item>
                    <Dropdown.Item eventKey="4">AR</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Sniper</Dropdown.Item>
                    <Dropdown.Item eventKey="6">RPG</Dropdown.Item>
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
