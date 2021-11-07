import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import Reservations from './components/Reservations'
import { BrowserRouter , Route} from 'react-router-dom'
import Menu from './components/Menu'
import {Switch } from 'react-router'
import DishDetails from './components/DishDetails'
import './App.css';


// for using a Route, you have to be inside a Router

function App() {
  // advanced stuff!
  // const myFunction = () => console.log('hello')
  return (
    <div>
      <BrowserRouter>
        <MyNavbar brand="Strivestaurant" />
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
          {/* valid routes can be /details/0, /details/strive, /details/whatever */}

          {/* with the render prop (instead of component) you can pass your own props to the component! */}
          {/* the render prop takes a function and returns a component Tag */}
          {/* but now this component is not receiving automatically history, location and match anymore! */}
          {/* luckily, those props are safely stored in the only argument the render function is accepting */}
          {/* so we can safely spread the content of that parameter in the props of our component */}
          <Route component={() => <h1>404</h1>} />
          {/* the Switch statement will stop whenever a specific route is found, */}
          {/* it's the simplest way of defining a fallback case for displaying like */}
          {/* a 404 page when a url does not match any route */}
        </Switch>
       
      </BrowserRouter>
    </div>
  )
}

export default App
