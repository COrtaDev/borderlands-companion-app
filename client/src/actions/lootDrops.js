import { lootDropsUrl } from '../config';
import { loot } from '../components/modal-assets/loot';

export const LOOT_DROPS = 'LOOT_DROPS';
export const SET_ITEM_TYPE = 'SET_ITEM_TYPE';
export const SET_ITEM_NAME = 'SET_ITEM_NAME';
export const SET_ITEM_MANUFACTURER = 'SET_ITEM_MANUFACTURER';
export const SET_ITEM_ELEMENT = 'SET_ITEM_ELEMENT';

export const getLootDrops = (userId) => async (dispatch) => {
    // We would like to paginate the number of loot drops returned here to optimize the user experience.
    const res = await fetch(`${lootDropsUrl}/${userId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch({ type: LOOT_DROPS, loot: data })
    } else { return Error('Request Failed'); }
}

export const filterManufacturers = () => {
    /*
    This action will be responsible for checking state and seeing if
    the user has selected an itemName, itemType, or itemElement and
    filtering the available choices that will render in the modal.
    */

}
