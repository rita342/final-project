import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTreeFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
export default function HouseList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const search = params.get("search");

  console.log(params, search);
  return (
    <>
      <hr />
      <div
        style={{
          margin: "3rem",
        }}
      >
        <div style={{ marginTop: "4rem" }}>
          {" "}
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
          <span
            style={{
              marginLeft: "75%",
              textDecoration: "underline",
              textDecorationStyle: "solid",
              fontWeight: "700",
            }}
          >
            <BsFillTreeFill />
            Houses
          </span>
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
