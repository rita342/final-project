import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
export default function HouseList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <h1 style={{ marginLeft: "8rem" }}>
          Tree house are the ultimate return to nature
        </h1>
        <div style={{ marginTop: "4rem" }}>
          <input
            type="text"
            placeholder="    search... "
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            style={{
              borderRadius: "30px",
              border: "1px solid grey",
            }}
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
                      }}
                    />
                    <AiFillHeart
                      style={{
                        position: "absolute",
                        marginTop: "10px",
                        marginLeft: "-35px",
                        color: "rgba(0,0,0,0.8)",
                        fontSize: "18px",
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
      </Container>
    </>
  );
}
