import { Badge, Col, Container, Row, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import items from "../data/menu.json";
import img2 from "../images/img2.jpg";
import { MdOutlineFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import Footer from "./Footer";
function Menu({ history }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <div>
          <input
            type="text"
            placeholder="search... "
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            style={{ borderRadius: "10px" }}
          />
        </div>

        <Row id="search-result" style={{ flexWrap: "wrap", display: "flex" }}>
          {items
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.country.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <Col xs={12} md={6} lg={6} xl={3} style={{ marginTop: "20px" }}>
                  <Link to={"/details/" + val.id}>
                    {" "}
                    <Image
                      src={val.img}
                      layout="fill"
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "20px",
                        position: "relative",
                      }}
                    />
                    <AiFillHeart
                      style={{
                        position: "absolute",
                        marginTop: "10px",
                        marginLeft: "-35px",
                        color: "black",
                        fontSize: "18px",
                      }}
                    />
                  </Link>
                  <div style={{ float: "right", marginTop: "20px" }}>
                    <p style={{ fontSize: "12px" }}>
                      {val.name} price: {val.price}$
                    </p>
                  </div>
                </Col>
              );
            })}{" "}
        </Row>

      
      <div><Footer/></div>

      </Container>
   
    </>
  );
}

export default Menu;
