import React from 'react';
import { Dropdown, } from 'react-bootstrap';
// import { SET_POSSIBLE_ITEMS } from './lootDrops';
import { loot } from '../components/modal-assets/loot';


export const filterElements = (itemType, itemName, itemManufacturer) => {
  /*This action will be responsible for checking state and seeing if the user has selected an itemType,
  itemName, itemManufacturer andfiltering the available choices that will render in the modal.*/
  let DropdownItems = [];
  const allElements = ["Shock", "Fire", "Corrosive", "Cryo", "Radiation", "Any", "None",]
  if (itemName) {
    const [filteredElements] = loot.filter((lootItem) => lootItem.name === itemName);
    console.log(filteredElements);
    let { possibleElements } = filteredElements;
    let elementSet = [...new Set(possibleElements)];
    DropdownItems = elementSet.map(
      (element, i) =>
        <Dropdown.Item key={i} eventKey={element} >
          {element}</Dropdown.Item>);
    // dispatch({ type: SET_POSSIBLE_ITEMS, possibleItems: [...filteredElements] });
    return DropdownItems;
  }
  else if (itemType && !itemManufacturer) {
    const filteredElements = loot.filter(
      (lootItem) =>
        lootItem.type === itemType ||
        lootItem.type.includes(itemType)
    );
    let elementSet = new Set();
    filteredElements.map(
      (item) =>
        elementSet.add(...item.possibleElements)
    );
    let possibleElements = [...elementSet];
    DropdownItems = possibleElements.map(
      (element, i) =>
        <Dropdown.Item key={i} eventKey={element} >
          {element}</Dropdown.Item>
    );
    return DropdownItems;
  }
  else if (!itemType && itemManufacturer) {
    const filteredElements = loot.filter(
      (lootItem) =>
        lootItem.possibleManufacturers.includes(itemManufacturer)
    );
    let elementSet = new Set();
    filteredElements.map(
      (item) =>
        elementSet.add(...item.possibleElements)
    );
    let possibleElements = [...elementSet];
    DropdownItems = possibleElements.map(
      (element, i) =>
        <Dropdown.Item key={i} eventKey={element} >
          {element}</Dropdown.Item>
    );
    return DropdownItems;
  }
  else if (itemType && itemManufacturer) {
    const filteredElements = loot.filter(
      (lootItem) =>
        (lootItem.type === itemType ||
          lootItem.type.includes(itemType)) &&
        lootItem.possibleManufacturers.includes(itemManufacturer)
    );
    let elementSet = new Set();
    filteredElements.map(
      (item) =>
        elementSet.add(...item.possibleElements)
    );
    let possibleElements = [...elementSet];
    DropdownItems = possibleElements.map(
      (element, i) =>
        <Dropdown.Item key={i} eventKey={element} >
          {element}</Dropdown.Item>)
    return DropdownItems;
  }
  else {
    DropdownItems = allElements.map(
      (element, i) =>
        <Dropdown.Item key={i} eventKey={element} >
          {element}</Dropdown.Item>)
    return DropdownItems;
  }
}
