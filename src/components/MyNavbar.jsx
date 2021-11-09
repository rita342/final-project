
import {Navbar,Nav,Button} from 'react-bootstrap'
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link} from 'react-router-dom'
import {  withRouter } from 'react-router'
import { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { FaUserCircle  } from "react-icons/fa";


const MyNavbar = ({ brand, history, location, match }) => (
    <Navbar collapseOnSelect expand="md" bg="pink" variant="white" style={{backgroundImage:`url("https://www.photos-public-domain.com/wp-content/uploads/2012/05/pink-paper-texture.jpg")`}}>
        <Link to="/">
          <h1 style={{color:'brown'}}>  <Navbar.Brand>{brand}<FaAirbnb style={{fontSize:'30px',color:'brown'}}/></Navbar.Brand></h1>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <div className="nav-link" onClick={() => {
                    console.log('hello!')
                    history.push('/menu')
                }} style={{ cursor: 'pointer'}}><MdOutlineHouseSiding style={{fontSize:'30px',color:'brown'}}/></div>
                <Link to="/reservations">
                    <div className={location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'}><BiGlobe style={{fontSize:'30px',color:'brown'}}/></div>
                </Link>
                <Nav.Link><FaUserCircle style={{fontSize:'30px',color:'brown'}}/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default withRouter(MyNavbar)
