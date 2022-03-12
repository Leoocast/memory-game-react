import imageList from "./imageList.json";
import { randomizeArray } from "../utils/utils";

export const randomCards = randomizeArray([
  ...imageList,
  ...imageList.map((image) => ({ ...image, id: image.id + image.id })),
]);

export const assetsUrl = "assets/";

export const backImageURL = "assets/back.png";
