import { Navbar, Nav } from "react-bootstrap";
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

function MyNavbar({ brand, history }) {
  return (
    <div className="flex-center">
      <div className="screen">
        <Navbar
          collapseOnSelect
          expand="md"
          bg="pink"
          variant="white"
          style={{ height: "50px", background: "white", position: "static" }}
        >
          <Link to="/">
            <h1 style={{ color: "#ff1493" }}>
              {" "}
              <Navbar.Brand>
                {brand}
                <FaAirbnb style={{ fontSize: "25px", color: "#ff1493" }} />
              </Navbar.Brand>
            </h1>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div
                style={{ fontSize: "17px", color: "black", marginTop: "13px" }}
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
                  style={{
                    fontSize: "17px",
                    color: "black",
                    marginTop: "10px",
                  }}
                />
              </div>

              <Link to="/favorite">
                <div>
                  <BiGlobe
                    style={{
                      fontSize: "17px",
                      color: "black",
                      marginTop: "19px",
                    }}
                  />{" "}
                </div>
              </Link>

              <Nav.Link>
                <FaUserCircle
                  style={{
                    fontSize: "17px",
                    color: "black",
                    marginTop: "13px",
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default withRouter(MyNavbar);
