import React from 'react';
import { Dropdown, } from 'react-bootstrap';
import { loot } from '../components/modal-assets/loot';

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
