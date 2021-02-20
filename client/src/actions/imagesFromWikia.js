import wiki from "wikijs";

export const getImgUrls = async (itemName) => {
  let apiEndpoint;
  const fandomWiki = await wiki({
    apiUrl: "https://Borderlands.wikia.com/api.php",
    origin: "*",
  });
  if (exceptionsFound(itemName)) {
    apiEndpoint = updateItemName(itemName);
  } else {
    apiEndpoint = itemName;
  }

  const page = await fandomWiki.page(apiEndpoint);
  const imgs = await page.images();
  const itemUrl = await page.url();

  // console.log("imgs: ", imgs);

  return { imgs: imgs, itemUrl: itemUrl };
};

function exceptionsFound(itemName) {
  const exceptions = Object.keys(apiEndpoints);
  if (exceptions.includes(itemName)) {
    return true;
  } else {
    return false;
  }
}

function updateItemName(itemName) {
  return apiEndpoints[itemName];
}
const apiEndpoints = {
  Epicenter: "Epicenter_(grenade_mod)",
  Techspert: "Techspert_(class_mod)",
};

export default getImgUrls;
