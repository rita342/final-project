import { setWeekWithOptions } from "date-fns/fp";
import { GET_SEARCH_TERM } from "../actions";
import { initialState } from "../store";

const searchReducer = (state = initialState.searchInput, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case GET_SEARCH_TERM: {
      return {
        ...state,
        value: action.payload,
      };
    }

    case "ADD_TO_FAV": {
      return {
        ...state,
        favourites: [...state.favourites, payload],
      };
    }
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favourites: state.favourites.filter(
          (houseItem) => houseItem !== payload
        ),
      };
    default:
      return state;
  }
};
export default searchReducer;
