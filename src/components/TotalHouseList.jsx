import { Col, Row, Image, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import items from "../data/menu.json";
export default function TotalHouseList({ history }) {
  // const { search } = useLocation();
  // const searchParams = new URLSearchParams(window.location.setSearchTerm);
  // const input = searchParams.get("input");
  // console.log(input);
  return (
    <>
      <Row id="search-result" style={{ flexWrap: "wrap", display: "flex" }}>
        {items.map((val) => (
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
        ))}{" "}
      </Row>
    </>
  );
}
