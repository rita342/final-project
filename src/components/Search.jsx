import items from "../data/menu.json";
import HouseList from "./HouseList";
import Footer from "./Footer";
import TotalHouseList from "./TotalHouseList";
import props from "../components/Reserve";
import { useHistory } from "react-router-dom";

export default function Menu({}) {
  return (
    <div>
      <div>
        <hr></hr>
      </div>
      <HouseList items={items}></HouseList>

      <Footer />
    </div>
  );
}
