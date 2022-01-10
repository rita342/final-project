import { Navbar, Nav } from "react-bootstrap";
import { MdOutlineHouseSiding } from "react-icons/md";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { FaAirbnb } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import TotalHouseList from "./TotalHouseList";
import { BsFillTreeFill } from "react-icons/bs";

function MyNavbar({ brand, history }) {
  return (
    <div className="flex">
      <div className="">
        <Navbar bg="light" expand="lg" style={{ height: "40px" }}>
          <Link to="/">
            {" "}
            <Navbar.Brand href="#">
              {" "}
              <BsFillTreeFill
                style={{
                  fontSize: "2rem",
                  color: "#26580F",
                }}
              />
            </Navbar.Brand>{" "}
          </Link>
          <Navbar.Brand href="#">
            {" "}
            <h1
              style={{
                color: "#985321",
                fontFamily: "cursive",
                fontSize: "18px",
                marginLeft: "-1.5rem",
                fontWeight: "900",
              }}
            >
              {" "}
              Treehouse
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Link to="/TotalHouseList">
              {" "}
              <Nav.Link className="d-flex" href="#" disabled>
                {" "}
                <MdOutlineHouseSiding
                  style={{
                    fontSize: "25px",
                    color: "#985321",
                  }}
                />
              </Nav.Link>
            </Link>
            <Link to="/favorite">
              {" "}
              <Nav.Link className="d-flex" href="#" disabled>
                <AiFillHeart
                  style={{
                    fontSize: "25px",

                    color: "#985321",
                  }}
                />
              </Nav.Link>{" "}
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default withRouter(MyNavbar);
