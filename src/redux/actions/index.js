export const GET_SEARCH_TERM = "GET_SEARCH_TERM";

export const addSearchTermAction = (searchInput) => ({
  type: GET_SEARCH_TERM,
  payload: searchInput,
});
