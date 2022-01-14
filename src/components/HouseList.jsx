import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTreeFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function HouseList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  // const location = useLocation();
  // const state = useSelector((state) => state.searchInput);
  //console.log("check state plz:", state.value);
  // useEffect(() => {
  // setSearchTerm(state.value);
  // const query = new URLSearchParams(window.location.setSearchTerm);
  const query = new URLSearchParams(window.location.Search);
  const country = query.get("country");
  console.log(country);
  // }, [state]);

  //
  return (
    <>
      <Row
        id="search-result"
        style={{ flexWrap: "wrap", display: "flex", bachground: "grey" }}
      >
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
          .map((val) => {
            return (
              <>
                {" "}
                <Container
                  style={{
                    margin: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card"
                    id="search-result"
                    style={{
                      width: "700px",
                      height: "400px",
                      background: "#b2dfdb",
                      boxShadow: "  0 4px 8px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Row>
                      <Col>
                        <div>
                          <Link to={"/details/" + val.id}>
                            {" "}
                            <Image
                              src={val.img}
                              layout="fill"
                              style={{
                                width: "400px",
                                height: "270px",
                              }}
                            />{" "}
                          </Link>
                        </div>
                      </Col>
                      <Col>
                        {" "}
                        <div style={{ marginTop: "3rem" }}>
                          <p
                            style={{
                              fontSize: "20px",
                              fontWeight: "900",
                              color: "#66350F",
                            }}
                          >
                            {val.country}
                          </p>
                          <h6>price: {val.price}$</h6>
                          <h6
                            style={{
                              fontSize: "13px",
                            }}
                          >
                            Name: {val.name}
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </>
            );

            {
            }
          })}{" "}
      </Row>{" "}
    </>
  );
}
