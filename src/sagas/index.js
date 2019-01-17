import { all } from "redux-saga/effects";
import imagesSaga from "./imagesSaga.js";

export default function* rootSaga() {
  yield all([imagesSaga()]);
}
