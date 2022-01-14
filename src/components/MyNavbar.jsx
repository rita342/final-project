import { Navbar, Dropdown, Nav } from "react-bootstrap";
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { FaAirbnb } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import TotalHouseList from "./TotalHouseList";
import { BsFillTreeFill } from "react-icons/bs";
import Login from "./CreateAccount/Login";
import Signup from "./CreateAccount/Signup";

function MyNavbar({ brand, history }) {
  return (
    <div className="flex">
      <div className="">
        <Navbar>
          <div style={{ display: "flex" }}>
            <Link to="/">
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  {" "}
                  <BsFillTreeFill
                    style={{
                      fontSize: "3rem",
                      color: "#26580F",
                    }}
                  />
                </li>
                <li
                  class="nav-item"
                  style={{
                    color: "#985321",
                    fontFamily: "cursive",
                    fontSize: "18px",
                    marginLeft: "-1rem",
                    fontWeight: "900",
                  }}
                >
                  {" "}
                  Treehouse
                </li>
              </ul>{" "}
            </Link>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ marginRight: "1rem" }}>
              <Link to="/TotalHouseList">
                <MdOutlineHouseSiding
                  style={{
                    fontSize: "25px",
                    color: "#985321",
                  }}
                />
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/favorite">
                <AiFillHeart
                  style={{
                    fontSize: "25px",

                    color: "#985321",
                    marginRight: "1rem",
                  }}
                />
              </Link>
            </Navbar.Text>

            <Navbar.Text style={{ marginRight: "1rem" }}>
              <Login />
            </Navbar.Text>

            <Navbar.Text>
              <Signup />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default withRouter(MyNavbar);
