import { combineReducers } from "redux";
import { photoReducer } from "./photoReducer";
import { isLoadingReducer } from "./isLoadingReducer";
import { errorReducer } from "./errorReducer";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
  photos: photoReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  nextPage: pageReducer
});
