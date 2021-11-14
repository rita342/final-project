import { Navbar, Nav, Button, Card } from "react-bootstrap";
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function MyNavbar({ brand, history, location, match }) {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  return (
    <div className="flex-center">
      <div className="screen">
        <Navbar
          collapseOnSelect
          expand="md"
          bg="pink"
          variant="white"
          style={{ height: "70px", background: "white", position: "static" }}
        >
          <Link to="/">
            <h1 style={{ color: "#ff1493" }}>
              {" "}
              <Navbar.Brand>
                {brand}
                <FaAirbnb style={{ fontSize: "20px", color: "#ff1493" }} />
              </Navbar.Brand>
            </h1>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div
                style={{ fontSize: "13px", color: "black", marginTop: "13px" }}
              >
                become a host
              </div>
              <div
                className="nav-link"
                onClick={() => {
                  console.log("hello!");
                  history.push("/menu");
                }}
                style={{ cursor: "pointer" }}
              >
                <MdOutlineHouseSiding
                  style={{ fontSize: "20px", color: "black" }}
                />
              </div>

              <Link to="/favorite">
                <BiGlobe style={{ fontSize: "20px", color: "black" }} />
              </Link>

              <Nav.Link>
                <FaUserCircle style={{ fontSize: "20px", color: "black" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default withRouter(MyNavbar);
