import { IMAGE } from "../constants/index";

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGE.LOAD_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { photoReducer };
