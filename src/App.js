import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search";
import GiftComponent from "./components/GiftComponent";
import { Switch } from "react-router";
import HouseDetails from "./components/HouseDetails";
import PaymentComponent from "./components/PaymentComponent";
import "./App.css";
import FavoriteProvider from "./store/Favorite";
import Favorite from "./components/Favorite";
import AboutComponent from "./components/AboutComponent";
import TotalHouseList from "./components/TotalHouseList";
function App() {
  return (
    <div>
      <FavoriteProvider>
        <BrowserRouter>
          <MyNavbar brand="Airbnb" />
          <Switch>
            <Route
              path="/"
              exact
              render={({ setSearchTerm, searchTerm }) => (
                <Home
                  setSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
                  subtitle="wellcome tp tree house"
                />
              )}
            />
            <Route path="/favorite" exact component={Favorite} />
            <Route path="/Search" exact component={Search} />
            <Route path="/TotalHouseList" exact component={TotalHouseList} />
            {/*  <Route
              path="/Menu"
              exact
              render={({ searchTerm }) => <Menu searchTerm={searchTerm} />}
            />*/}

            <Route path="/GiftComponent" exact component={GiftComponent} />
            <Route path="/details/:houseId" component={HouseDetails} />
            <Route path="/AboutComponent" exact component={AboutComponent} />
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
