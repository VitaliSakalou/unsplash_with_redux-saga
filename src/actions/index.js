import { IMAGE } from "../constants/index";

const loadImages = () => ({
  type: IMAGE.LOAD
});
const setImages = images => ({
  type: IMAGE.LOAD_SUCCESS,
  payload: images
});
const errorImages = error => ({
  type: IMAGE.LOAD_ERROR,
  payload: error
});

export { loadImages, setImages, errorImages };
