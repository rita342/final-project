import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  isFavorite: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
});

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  function isFavorite(item) {
    return favorites.some((favorite) => favorite.id === item.id);
  }
  function addFavorite(item) {
    setFavorites((newFavorites) => [...newFavorites, item]);
  }
  function removeFavorite(item) {
    setFavorites((newFavorites) =>
      newFavorites.filter((favorite) => favorite.id !== item.id)
    );
  }
  const context = {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
}
