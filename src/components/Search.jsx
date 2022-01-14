import items from "../data/menu.json";
import HouseList from "./HouseList";
import Footer from "./Footer";

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
