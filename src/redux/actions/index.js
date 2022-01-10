export const GET_SEARCH_TERM = "GET_SEARCH_TERM";

export const addSearchTermAction = (searchInput) => ({
  type: GET_SEARCH_TERM,
  payload: searchInput,
});
export const addToFav = (houseItem) => ({
  type: 'ADD_TO_FAV',
  payload: houseItem
})

export const removeFromFav = (houseItem) => ({
  type: 'REMOVE_FROM_FAV',
  payload: houseItem
})