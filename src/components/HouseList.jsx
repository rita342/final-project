import { Col, Row, Image, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTreeFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function HouseList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const state = useSelector((state) => state.searchInput);
  console.log("check state plz:", state.value);

  useEffect(() => {
    setSearchTerm(state.value);
  }, [state]);

  return (
    <>
      <div
        className="banner"
        style={{
          background: "#F8B195",
          height: "6rem",
          boxShadow: "0 5px 5px rgb(36, 19, 35)",
        }}
      >
        <div
          className="banner-text"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingTop: "1rem",
          }}
        >
          <BsFillTreeFill style={{ fontSize: "3rem" }} />
          <span style={{ color: "white", fontWeight: "700" }}>House </span>
          <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
            Find your city, ideal destination!!
          </span>
        </div>
      </div>

      <div
        style={{
          margin: "3rem",
        }}
      >
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
            .map((val) => {
              return (
                <Col xs={12} md={6} lg={6} xl={3} style={{ marginTop: "20px" }}>
                  <Link to={"/details/" + val.id}>
                    {" "}
                    <Image
                      src={val.img}
                      layout="fill"
                      style={{
                        width: "100%",
                        height: "270px",
                        borderRadius: "20px",
                      }}
                    />
                    <AiFillHeart
                      className="heart-icon"
                      style={{
                        position: "absolute",
                        marginTop: "10px",
                        marginLeft: "-35px",
                        color: "rgba(0,0,0,0.8)",
                        fontSize: "25px",
                      }}
                    />
                  </Link>
                  <div style={{ marginTop: "5px" }}>
                    <p style={{ fontSize: "12px" }}>
                      {val.country}: {val.name} price: {val.price}$
                    </p>
                  </div>
                </Col>
              );
            })}{" "}
        </Row>
      </div>
    </>
  );
}
