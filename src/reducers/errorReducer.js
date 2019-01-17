import { IMAGE } from "../constants/index";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGE.LOAD_ERROR:
      return action.payload;
    case IMAGE.LOAD:
      return null;
    case IMAGE.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export { errorReducer };
