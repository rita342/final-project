import items from "../data/menu.json";
import HouseList from "./HouseList";
import Footer from "./Footer";

export default function Menu() {
  return (
    <div>
      <h1>Our Offers</h1>
      <HouseList items={items}></HouseList>
      <Footer />
    </div>
  );
}
