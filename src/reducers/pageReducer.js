import { IMAGE } from "../constants/index";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case IMAGE.LOAD_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export { pageReducer };
