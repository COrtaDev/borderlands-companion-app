import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, } from 'react-bootstrap';
import { lootDropsUrl } from '../config';
import { loot } from '../components/modal-assets/loot';
import { manufacturers } from '../components/modal-assets/manufacturers';

export const LOOT_DROPS = 'LOOT_DROPS';
export const SET_ITEM_TYPE = 'SET_ITEM_TYPE';
export const SET_ITEM_NAME = 'SET_ITEM_NAME';
export const SET_ITEM_MANUFACTURER = 'SET_ITEM_MANUFACTURER';
export const SET_ITEM_ELEMENT = 'SET_ITEM_ELEMENT';

export const getLootDrops = (userId) => async (dispatch) => {
    // We would like to paginate the number of loot drops returned here to optimize the user experience.
    const res = await fetch(`${lootDropsUrl}/${userId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch({ type: LOOT_DROPS, loot: data })
    } else { return Error('Request Failed'); }
}

export const filterManufacturers = (itemType, itemName, itemElement) => {
    /*
    This action will be responsible for checking state and seeing if
    the user has selected an itemName, itemType, or itemElement and
    filtering the available choices that will render in the modal.
    */
    let DropdownItems = [];
    //Currently, we check to see if an itemType, itemName, or itemElement exists in state
    if (itemName || itemType || itemElement) {
        const filteredManufacturers = loot.filter(
            (lootItem) => lootItem.name === itemName || lootItem.type === itemType || lootItem.possibleElements.includes(itemElement));
        // We will need to create an array of manufacturers to ensure there are no duplicates.
        let manufacturerSet = new Set();
        filteredManufacturers.map((item) => manufacturerSet.add(...item.possibleManufacturers))
        let possibleManufacturers = [...manufacturerSet]
        DropdownItems = possibleManufacturers.map(
            (manufacturer) => <Dropdown.Item key={manufacturer} eventKey={manufacturer}>{manufacturer}</Dropdown.Item>);
    } else {
        // If no previous selections are found in state, we want to map all possible manufacturers
        DropdownItems = manufacturers.map((item) => <Dropdown.Item key={item.id} eventKey={item.manufacturer}>{item.manufacturer}</Dropdown.Item>);
    }
    return DropdownItems
}
