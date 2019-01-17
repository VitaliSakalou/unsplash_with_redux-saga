import { IMAGE } from "../constants/index";

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGE.LOAD:
      return true;
    case IMAGE.LOAD_SUCCESS:
      return false;
    case IMAGE.LOAD_ERROR:
      return false;
    default:
      return state;
  }
};

export { isLoadingReducer };
