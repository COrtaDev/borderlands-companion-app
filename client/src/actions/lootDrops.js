import { lootDropsUrl } from '../config';
export const LOOT_DROPS = 'LOOT_DROPS';

export const getLootDrops = (userId) => async (dispatch) => {
    const res = await fetch(`${lootDropsUrl}/${userId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch({ type: LOOT_DROPS, loot: data })
    } else { return Error('Request Failed'); }
}
