export const addToFav = (houseItem) => ({
    type: 'ADD_TO_FAV',
    payload: houseItem
})

export const removeFromFav = (houseItem) => ({
    type: 'REMOVE_FROM_FAV',
    payload: houseItem
})