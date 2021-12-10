import items from "../data/menu.json";
import HouseList from "./HouseList";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

export default function Menu() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const search = params.get("search");

  console.log(params, search);
  return (
    <div>
      <HouseList items={items}></HouseList>
      <Footer />
    </div>
  );
}
