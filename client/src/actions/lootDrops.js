import React from 'react';
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
    /*This action will be responsible for checking state and seeing if the user has selected an itemName,
     itemType, or itemElement and filtering the available choices that will render in the modal.*/
    let DropdownItems = [];
    if (itemName) {
        const [filteredManufacturers] = loot.filter((lootItem) => lootItem.name === itemName);
        let { possibleManufacturers } = filteredManufacturers;
        DropdownItems = possibleManufacturers.map(
            (manufacturer, i) =>
                <Dropdown.Item key={i} eventKey={manufacturer}>
                    {manufacturer}</Dropdown.Item>
        );
        return DropdownItems;
    }
    else if (itemType && !itemElement) {
        const filteredManufacturers = loot.filter(
            (lootItem) =>
                lootItem.type === itemType ||
                lootItem.type.includes(itemType)
        );
        // We will need to create a new Set() of manufacturers to ensure there are no duplicates.
        let manufacturerSet = new Set();
        filteredManufacturers.map(
            (item) =>
                manufacturerSet.add(...item.possibleManufacturers)
        );
        // We then coerce the Set object into an array using the spread opperator.
        let possibleManufacturers = [...manufacturerSet];
        DropdownItems = possibleManufacturers.map(
            (manufacturer, i) =>
                <Dropdown.Item key={i} eventKey={manufacturer}>
                    {manufacturer}</Dropdown.Item>
        );
        return DropdownItems;
    }
    else if (!itemType && itemElement) {
        if (itemElement === "None") {
            const filteredManufacturers = loot.filter(
                (lootItem) =>
                    lootItem.possibleElements.includes(itemElement)
            );
            // We will need to create a new Set() of manufacturers to ensure there are no duplicates.
            let manufacturerSet = new Set();
            filteredManufacturers.map(
                (item) =>
                    manufacturerSet.add(...item.possibleManufacturers)
            );
            // We then coerce the Set object into an array using the spread opperator.
            let possibleManufacturers = [...manufacturerSet];
            DropdownItems = possibleManufacturers.map(
                (manufacturer, i) =>
                    <Dropdown.Item key={i} eventKey={manufacturer}>
                        {manufacturer}</Dropdown.Item>
            );
        }
        else {
            const filteredManufacturers = loot.filter(
                (lootItem) =>
                    lootItem.possibleElements.includes(itemElement) ||
                    lootItem.possibleElements.includes("Any")
            );
            // We will need to create a new Set() of manufacturers to ensure there are no duplicates.
            let manufacturerSet = new Set();
            filteredManufacturers.map(
                (item) =>
                    manufacturerSet.add(...item.possibleManufacturers)
            );
            // We then coerce the Set object into an array using the spread opperator.
            let possibleManufacturers = [...manufacturerSet];
            DropdownItems = possibleManufacturers.map(
                (manufacturer, i) =>
                    <Dropdown.Item key={i} eventKey={manufacturer}>
                        {manufacturer}</Dropdown.Item>
            );
        }
        return DropdownItems;
    }
    else if (itemType && itemElement) {
        if (itemElement === "None") {
            const filteredManufacturers = loot.filter(
                (lootItem) =>
                    lootItem.type === itemType &&
                    lootItem.possibleElements.includes(itemElement)
            );
            // We will need to create a new Set() of manufacturers to ensure there are no duplicates.
            let manufacturerSet = new Set();
            filteredManufacturers.map(
                (item) =>
                    manufacturerSet.add(...item.possibleManufacturers)
            );
            // We then coerce the Set object into an array using the spread opperator.
            let possibleManufacturers = [...manufacturerSet];
            DropdownItems = possibleManufacturers.map(
                (manufacturer, i) =>
                    <Dropdown.Item key={i} eventKey={manufacturer}>
                        {manufacturer}</Dropdown.Item>
            );
        }
        else {
            const filteredManufacturers = loot.filter(
                (lootItem) =>
                    (lootItem.possibleElements.includes(itemElement) ||
                        lootItem.possibleElements.includes("Any")) &&
                    lootItem.type === itemType
            );
            // We will need to create a new Set() of manufacturers to ensure there are no duplicates.
            let manufacturerSet = new Set();
            filteredManufacturers.map(
                (item) =>
                    manufacturerSet.add(...item.possibleManufacturers)
            );
            // We then coerce the Set object into an array using the spread opperator.
            let possibleManufacturers = [...manufacturerSet];
            DropdownItems = possibleManufacturers.map(
                (manufacturer, i) =>
                    <Dropdown.Item key={i} eventKey={manufacturer}>
                        {manufacturer}</Dropdown.Item>
            );
        }
        return DropdownItems;
    }
    else {
        // If no previous selections are found in state, we want to map all possible manufacturers
        DropdownItems = manufacturers.map(
            (item) =>
                <Dropdown.Item key={item.id} eventKey={item.manufacturer}>
                    {item.manufacturer}</Dropdown.Item>
        );
        return DropdownItems;
    }
}

export const filterNames = (itemType, itemElement, itemManufacturer) => {
    /*This action will be responsible for checking state and seeing if the user has selected an itemType,
    itemElement, itemManufacturer and filtering the available choices that will render in the modal.*/
    let DropdownItems = [];
    if (itemType) {
        const filteredNames = loot.filter(
            (lootItem) =>
                lootItem.type === itemType ||
                lootItem.type.includes(itemType)
        );
        DropdownItems = filteredNames.map(
            (item) =>
                <Dropdown.Item key={item.id} eventKey={item.name}>
                    {item.name}</Dropdown.Item>
        );
        return DropdownItems;
    }
    else if (itemElement && !itemManufacturer) {
        if (itemElement === 'None') {
            const filteredNames = loot.filter(
                (lootItem) =>
                    lootItem.possibleElements.includes(itemElement)
            );
            DropdownItems = filteredNames.map(
                (item) =>
                    <Dropdown.Item key={item.id} eventKey={item.name}>
                        {item.name}</Dropdown.Item>
            );
        }
        else {
            const filteredNames = loot.filter(
                (lootItem) =>
                    lootItem.possibleElements.includes(itemElement) ||
                    lootItem.possibleElements.includes("Any")
            );
            DropdownItems = filteredNames.map(
                (item) =>
                    <Dropdown.Item key={item.id} eventKey={item.name}>
                        {item.name}</Dropdown.Item>
            );
        }
        return DropdownItems;
    }
    else if (!itemElement && itemManufacturer) {
        const filteredNames = loot.filter(
            (lootItem) =>
                lootItem.possibleManufacturers.includes(itemManufacturer)
        );
        DropdownItems = filteredNames.map(
            (item) =>
                <Dropdown.Item key={item.id} eventKey={item.name}>
                    {item.name}</Dropdown.Item>
        );
        return DropdownItems;
    }
    else if (itemElement && itemManufacturer) {
        if (itemElement === 'None') {
            const filteredNames = loot.filter(
                (lootItem) =>
                    lootItem.possibleElements.includes(itemElement) &&
                    lootItem.possibleManufacturers.includes(itemManufacturer)
            );
            DropdownItems = filteredNames.map(
                (item) =>
                    <Dropdown.Item key={item.id} eventKey={item.name}>
                        {item.name}</Dropdown.Item>
            );
        }
        else {
            const filteredNames = loot.filter(
                (lootItem) =>
                    (lootItem.possibleElements.includes(itemElement) ||
                        lootItem.possibleElements.includes("Any")) &&
                    lootItem.possibleManufacturers.includes(itemManufacturer)
            );
            DropdownItems = filteredNames.map(
                (item) =>
                    <Dropdown.Item key={item.id} eventKey={item.name}>
                        {item.name}</Dropdown.Item>
            );
        }
        return DropdownItems;
    }
    else {
        // If no previous selections are found in state, we want to map all possible names
        DropdownItems = loot.map(
            (item) =>
                <Dropdown.Item key={item.id} eventKey={item.name}>
                    {item.name}</Dropdown.Item>
        );
        return DropdownItems;
    }
}

export const filterElements = (itemType, itemName, itemManufacturer) => {
    /*This action will be responsible for checking state and seeing if the user has selected an itemType,
    itemName, itemManufacturer andfiltering the available choices that will render in the modal.*/
    let DropdownItems = [];
    const allElements = ["Shock", "Fire", "Corrosive", "Cryo", "Radiation", "Any", "None",]
    if (itemName) {
        const [filteredElements] = loot.filter((lootItem) => lootItem.name === itemName);
        let { possibleElements } = filteredElements;
        let elementSet = [...new Set(possibleElements)];
        DropdownItems = elementSet.map(
            (element, i) =>
                <Dropdown.Item key={i} eventKey={element} >
                    {element}</Dropdown.Item>)
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
