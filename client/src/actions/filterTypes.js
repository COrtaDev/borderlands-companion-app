import React from 'react';
import { Button, DropdownButton, Dropdown, ButtonGroup, } from 'react-bootstrap';
import { loot } from '../components/modal-assets/loot';

// const weaponTypes = ["Pistol", "SMG", "Shotgun", "AR", "Sniper", "RPG"];
// const classMods = ["Amara", "Fl4k", "Moze", "Zane"]
const itemTypes = {
  weapons: ["Pistol", "SMG", "Shotgun", "AR", "Sniper", "RPG"],
  shield: "Shield",
  grenadeMod: "Grenade Mod",
  artifact: "Artifact",
  classMods: ["Amara", "Fl4k", "Moze", "Zane"],
};
const handleType = (type, ButtonGroupItems, filteredTypes, props) => {
  console.log(props)
  if (itemTypes.weapons.includes(type)) {
    ButtonGroupItems = filteredTypes.map(
      (item) =>
        <Dropdown.Item key={item.id} eventKey={item.type}>
          {item.type}</Dropdown.Item>
    );
    return ButtonGroupItems;
  }
  else if (type === "Grenade Mod") {
    console.log(type);
  }
}
export const handleButtonTypes = (itemName, itemManufacturer, itemElement) => {
  if (itemName) {
    const filteredTypes = loot.filter(
      (lootItem) =>
        lootItem.name === itemName
    );
    const [possibleTypes] = filteredTypes;
    console.log(possibleTypes.type);
  }
}
export const filterTypes = (itemName, itemManufacturer, itemElement) => {
  let ButtonGroupItems = [];
  if (itemName) {
    const filteredTypes = loot.filter(
      (lootItem) =>
        lootItem.name === itemName
    );
    const [possibleTypes] = filteredTypes;
    console.log(possibleTypes.type);
    return handleType(possibleTypes.type, ButtonGroupItems, filteredTypes);
  }
  else {
    ButtonGroupItems = itemTypes.weapons.map(
      (weaponType, i) =>
        <Dropdown.Item key={i} eventKey={weaponType}>
          {weaponType}</Dropdown.Item>
    );
    return ButtonGroupItems;
  }
}
