import { useContext } from "react";
import { FavoriteContext } from "../store/Favorite";
import HouseList from "./HouseList";
import Footer from "./Footer";

export default function Favorite() {
  const context = useContext(FavoriteContext);
  return (
    <div>
      {context.favorites.length ? (
        <HouseList items={context.favorites}></HouseList>
      ) : (
        <div className="empty-box">
          {" "}
          <h3> You do not have any reservation!!</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9j9x2aj-G0MA0iGLX5V96ZwDS0lF770E0qw&usqp=CAU" />
        </div>
      )}
      <Footer />
    </div>
  );
}
