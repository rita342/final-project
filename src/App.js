import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import Reservations from './components/Reservations'
import { BrowserRouter , Route} from 'react-router-dom'
import Menu from './components/Menu'
import {Switch } from 'react-router'
import DishDetails from './components/DishDetails'
import { FaAirbnb } from "react-icons/fa";
import './App.css';


// for using a Route, you have to be inside a Router

function App() {
  // advanced stuff!
  // const myFunction = () => console.log('hello')
  return (
    <div stye={{backgroundImage:`url("https://images.pexels.com/photos/242201/pexels-photo-242201.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`}}>
      <BrowserRouter>
      <MyNavbar brand="Airbnb"/>
        <Switch>
          <Route 
          path="/"
           exact render={(routerProps)=> <Home{...routerProps} subtitle="wellcome tp tree house"/>}
   />
          <Route path="/reservations" exact component={Reservations} />
          <Route path="/menu" exact component={Menu} />
          {/* Route is taking our component as a prop, and returning something new! */}
          {/* it's creating a HOC - Higher-order component */}

          <Route path="/details/:pastaId" component={DishDetails} />
          

          <Route component={() => <h1>404</h1>} />
       
        </Switch>
       
      </BrowserRouter>
    </div>
  )
}

export default App
