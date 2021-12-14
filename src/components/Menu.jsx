import items from "../data/menu.json";
import HouseList from "./HouseList";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <HouseList items={items}></HouseList>
      <Footer />
    </div>
  );
}
