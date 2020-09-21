import { lootDropsUrl } from '../config';
export const LOOT_DROPS = 'LOOT_DROPS';
export const SET_ITEM_TYPE = 'SET_ITEM_TYPE';
export const SET_ITEM_NAME = 'SET_ITEM_NAME';
export const SET_ITEM_MANUFACTURER = 'SET_ITEM_MANUFACTURER';
export const SET_ITEM_ELEMENT = 'SET_ITEM_ELEMENT';

export const getLootDrops = (userId) => async (dispatch) => {
    const res = await fetch(`${lootDropsUrl}/${userId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch({ type: LOOT_DROPS, loot: data })
    } else { return Error('Request Failed'); }
}
