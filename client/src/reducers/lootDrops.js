import { LOOT_DROPS, SET_ITEM_TYPE, SET_ITEM_NAME } from '../actions/lootDrops';

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
        default:
            return { ...state };
    }
};
export default lootDrops;
