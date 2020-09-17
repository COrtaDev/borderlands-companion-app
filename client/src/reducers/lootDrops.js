import { LOOT_DROPS } from '../actions/lootDrops';

const lootDrops = (state = {}, action) => {
    switch (action.type) {
        case LOOT_DROPS: {
            return {
                ...state,
                loot: action.loot,
                lootDrops: action.lootDrops
            }
        }
        default:
            return { ...state };
    }
};
export default lootDrops;
