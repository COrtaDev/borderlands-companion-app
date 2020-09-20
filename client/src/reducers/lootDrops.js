import { LOOT_DROPS, SET_ITEM_TYPE } from '../actions/lootDrops';

const lootDrops = (state = {}, action) => {
    switch (action.type) {
        case LOOT_DROPS: {
            return {
                ...state,
                loot: action.loot,
                lootDrops: action.lootDrops
            }
        }
        case SET_ITEM_TYPE:{
            return{
                ...state,
                itemType: action.itemType
            }
        }
        default:
            return { ...state };
    }
};
export default lootDrops;
