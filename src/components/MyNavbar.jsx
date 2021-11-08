// import { Navbar, Nav } from 'react-bootstrap'
import {Navbar,Nav,Button} from 'react-bootstrap'
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link} from 'react-router-dom'
import {  withRouter } from 'react-router'
import { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { FaUserCircle  } from "react-icons/fa";


const MyNavbar = ({ brand, history, location, match }) => (
    <Navbar collapseOnSelect expand="md" bg="green" variant="white" style={{backgroundColor:'#2F4F4F'}}>
        <Link to="/">
          <h1 style={{color:'white'}}>  <Navbar.Brand>{brand}<FaAirbnb style={{fontSize:'30px',color:'white'}}/></Navbar.Brand></h1>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <div className="nav-link" onClick={() => {
                    console.log('hello!')
                    history.push('/menu')
                }} style={{ cursor: 'pointer'}}><MdOutlineHouseSiding style={{fontSize:'30px',color:'white'}}/></div>
                <Link to="/reservations">
                    <div className={location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'}><BiGlobe style={{fontSize:'30px',color:'white'}}/></div>
                </Link>
                <Nav.Link><FaUserCircle style={{fontSize:'30px',color:'white'}}/></Nav.Link>
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