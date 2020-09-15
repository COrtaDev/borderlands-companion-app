import { combineReducers } from 'redux';
import auth from './auth';
import lootDrops from './lootDrops'
// import user from './user';

const rootReducer = combineReducers({
    auth,
    lootDrops,
});

export default rootReducer;
