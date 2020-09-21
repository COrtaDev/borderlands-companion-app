import {
    LOOT_DROPS,
    SET_ITEM_TYPE,
    SET_ITEM_NAME,
    SET_ITEM_MANUFACTURER,
    SET_ITEM_ELEMENT,
} from '../actions/lootDrops';

const lootDrops = (state = {}, action) => {
    switch (action.type) {
        case LOOT_DROPS: {
            return {
                ...state,
                loot: action.loot,
                // lootDrops: action.lootDrops
            }
        }
        case SET_ITEM_TYPE: {
            return {
                ...state,
                itemType: action.itemType,
                itemTypeWithHashtag: `#${action.itemType}`,
            }
        }
        case SET_ITEM_NAME: {
            return {
                ...state,
                itemName: action.itemName,
                itemNameWithHashtag: `#${action.itemName}`,
            }
        }
        case SET_ITEM_MANUFACTURER: {
            return {
                ...state,
                itemManufacturer: action.itemManufacturer,
                itemManufacturerWithHashtag: `#${action.itemManufacturer}`,
            }
        }
        case SET_ITEM_ELEMENT: {
            return {
                ...state,
                itemElement: action.itemElement,
                itemElementWithHashtag: `#${action.itemElement}`,
            }
        }
        default:
            return { ...state };
    }
};
export default lootDrops;
