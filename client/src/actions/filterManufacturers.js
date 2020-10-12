import React from 'react';
import { Dropdown, } from 'react-bootstrap';
import { loot } from '../components/modal-assets/loot';
import { manufacturers } from '../components/modal-assets/manufacturers';

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
