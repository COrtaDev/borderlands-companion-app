import { loot } from "../components/modal-assets/loot";
import {
  LOOT_DROPS,
  SET_ITEM_TYPE,
  SET_ITEM_NAME,
  SET_ITEM_MANUFACTURER,
  SET_ITEM_ELEMENT,
  SET_POSSIBLE_ITEMS,
} from "../actions/lootDrops";

const lootDrops = (state = {}, action) => {
  switch (action.type) {
    case LOOT_DROPS: {
      return {
        ...state,
        newLootAvailable: JSON.parse(
          window.sessionStorage.getItem("newLootDropAvailable")
        ),
        lootDrops: action.lootDrops,
      };
    }
    case SET_ITEM_TYPE: {
      return {
        ...state,
        itemType: action.itemType,
        itemTypeWithHashtag: `#${action.itemType}`,
      };
    }
    case SET_ITEM_NAME: {
      return {
        ...state,
        itemName: action.itemName,
        itemNameWithHashtag: `#${action.itemName}`,
      };
    }
    case SET_ITEM_MANUFACTURER: {
      return {
        ...state,
        itemManufacturer: action.itemManufacturer,
        itemManufacturerWithHashtag: `#${action.itemManufacturer}`,
      };
    }
    case SET_ITEM_ELEMENT: {
      return {
        ...state,
        itemElement: action.itemElement,
        itemElementWithHashtag: `#${action.itemElement}`,
      };
    }
    case SET_POSSIBLE_ITEMS: {
      return {
        ...state,
        possibleItems: (action.possibleItems = loot),
      };
    }
    default:
      return { ...state };
  }
};
export default lootDrops;
