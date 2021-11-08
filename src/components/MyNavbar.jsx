// import { Navbar, Nav } from 'react-bootstrap'
import {Navbar,Nav,Button} from 'react-bootstrap'
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link} from 'react-router-dom'
import {  withRouter } from 'react-router'
import { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { FaUserCircle  } from "react-icons/fa";


const MyNavbar = ({ brand, history, location, match }) => (
    <Navbar collapseOnSelect expand="md" bg="pink" variant="white" style={{backgroundImage:`url("https://images.pexels.com/photos/1039083/pexels-photo-1039083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000")`}}>
        <Link to="/">
          <h1 style={{color:'pink'}}>  <Navbar.Brand>{brand}<FaAirbnb style={{fontSize:'30px',color:'pink'}}/></Navbar.Brand></h1>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <div className="nav-link" onClick={() => {
                    console.log('hello!')
                    history.push('/menu')
                }} style={{ cursor: 'pointer'}}><MdOutlineHouseSiding style={{fontSize:'30px',color:'pink'}}/></div>
                <Link to="/reservations">
                    <div className={location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'}><BiGlobe style={{fontSize:'30px',color:'pink'}}/></div>
                </Link>
                <Nav.Link><FaUserCircle style={{fontSize:'30px',color:'pink'}}/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

// two ways for redirecting the user
// 1) Using a <Link /> component
// 2) Using history.push()

export default withRouter(MyNavbar)
// the result of withRouter(MyNavbar) is a HOC,
// so our very own MyNavbar enriched with additional props (history, location and match)