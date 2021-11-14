import { useContext } from "react";
import { FavoriteContext } from "../store/Favorite";
import HouseList from "./HouseList";
import Footer from "./Footer";

export default function Favorite() {
  const context = useContext(FavoriteContext);
  return (
    <div>
      <h1>Your Favorite Places</h1>
      {context.favorites.length ? (
        <HouseList items={context.favorites}></HouseList>
      ) : (
        <h2>You do not have any favorite</h2>
      )}
      <Footer />
    </div>
  );
}
