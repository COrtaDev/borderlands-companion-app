import wiki from "wikijs";

export const getImgUrls = async (itemName) => {
  // await mw.loader.using( 'mediawiki.ForeignApi' );
  const fandomWiki = await wiki({
    apiUrl: "http://Borderlands.wikia.com/api.php",
    origin: "*",
  });
  const page = await fandomWiki.page(itemName);
  const imgs = await page.images();
  console.log("imgs: ", imgs);
  // if (imgs.length > 1) {
  //   // const findImg = imgs.includes(itemName);
  //   console.log(imgs[imgs.length - 1]);
  //   return imgs[imgs.length - 1];
  // }
  return imgs;
};

export default getImgUrls;
