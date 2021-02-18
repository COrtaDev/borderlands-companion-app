import wiki from "wikijs";

export const getImgUrls = async (itemName) => {
  const fandomWiki = await wiki({
    apiUrl: "http://Borderlands.wikia.com/api.php",
    origin: null,
  });
  const page = await fandomWiki.page(itemName);
  const imgs = await page.rawImages();
  console.log(imgs);
  return imgs;
};

export default getImgUrls;
