import { put, call, takeEvery, select } from "redux-saga/effects";
import { setImages, errorImages } from "../actions/index";
import { IMAGE } from "../constants/index";
import { fetchImages } from "../api/index";

const getPage = state => state.nextPage;

export function* imagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(errorImages(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGE.LOAD, imagesLoad);
}
