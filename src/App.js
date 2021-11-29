import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";

import Home from "./components/Home";

import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import GiftComponent from "./components/GiftComponent";
import { Switch } from "react-router";
import HouseDetails from "./components/HouseDetails";
import PaymentComponent from "./components/PaymentComponent";
import "./App.css";
import FavoriteProvider from "./store/Favorite";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div
      stye={{
        backgroundImage: `url("https://images.pexels.com/photos/242201/pexels-photo-242201.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`,
      }}
    >
      <FavoriteProvider>
        <BrowserRouter>
          <MyNavbar brand="Airbnb" />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <Home {...routerProps} subtitle="wellcome tp tree house" />
              )}
            />
            <Route path="/favorite" exact component={Favorite} />
            <Route path="/Menu" exact component={Menu} />

            <Route path="/GiftComponent" exact component={GiftComponent} />
            <Route path="/details/:houseId" component={HouseDetails} />
            <Route
              path="/PaymentComponent"
              exact
              component={PaymentComponent}
            />
          </Switch>
        </BrowserRouter>
      </FavoriteProvider>
    </div>
  );
}

export default App;
