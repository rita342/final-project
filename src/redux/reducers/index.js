import { setWeekWithOptions } from "date-fns/fp";
import { GET_SEARCH_TERM } from "../actions";
import { initialState } from "../store";

const searchReducer = (state = initialState.searchInput, action) => {
  switch (action.type) {
    case GET_SEARCH_TERM: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
