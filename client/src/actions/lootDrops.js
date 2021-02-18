import { lootDropsUrl } from "../config";

export const LOOT_DROPS = "LOOT_DROPS";
export const SET_ITEM_TYPE = "SET_ITEM_TYPE";
export const SET_ITEM_NAME = "SET_ITEM_NAME";
export const SET_ITEM_MANUFACTURER = "SET_ITEM_MANUFACTURER";
export const SET_ITEM_ELEMENT = "SET_ITEM_ELEMENT";
export const SET_POSSIBLE_ITEMS = "SET_POSSIBLE_ITEMS";

export const getLootDrops = (userId) => async (dispatch) => {
  // We would like to paginate the number of loot drops returned here to optimize the user experience.
  const res = await fetch(`${lootDropsUrl}/${userId}`);
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    // const stringLoot = JSON.stringify(data);
    // console.log(stringLoot);
    // const cookie = `${LOOT_DROPS}=${JSON.stringify(data)}`;
    // console.log(cookie);
    // const cookie = `${LOOT_DROPS}=${data.loot}`;
    document.cookie = `${LOOT_DROPS}=${data.loot}`;
    dispatch({ type: LOOT_DROPS, lootDrops: data.loot });
  } else {
    return Error("Request Failed");
  }
};
