import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";

import Home from "./components/Home";

import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { Switch } from "react-router";
import HouseDetails from "./components/HouseDetails";

import "./App.css";
import FavoriteProvider from "./store/Favorite";
import Favorite from "./components/Favorite";
// for using a Route, you have to be inside a Router

function App() {
  // advanced stuff!
  // const myFunction = () => console.log('hello')
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
            <Route path="/menu" exact component={Menu} />
            {/* Route is taking our component as a prop, and returning something new! */}
            {/* it's creating a HOC - Higher-order component */}

            <Route path="/details/:houseId" component={HouseDetails} />

            <Route component={() => <h1>404</h1>} />
          </Switch>
        </BrowserRouter>
      </FavoriteProvider>
    </div>
  );
}

export default App;
