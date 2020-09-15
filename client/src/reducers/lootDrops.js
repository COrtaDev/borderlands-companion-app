import { LOOT_DROPS } from '../actions/user';

const user = (state = {}, action) => {
    switch (action.type) {
        case LOOT_DROPS: {
            return {
                ...state,
                loot: action.loot
            }
        }
        default:
            return { ...state };
    }
};
export default user;
