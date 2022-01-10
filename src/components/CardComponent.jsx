import React from "react";
import { Col, Image, Container, Row } from "react-bootstrap";

const CardComponent = () => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <h3
        style={{
          fontFamily: "cursive",
          fontSize: "25px",

          fontWeight: "900",
        }}
      >
        Top TreeHouses
      </h3>
      <Row className="small">
        <Col xs={12} md={6} lg={6} xl={3}>
          <div style={{ position: "relative" }}>
            <Image
              src="https://cdn2.wanderlust.co.uk/media/1015/recropped-ranch-inn.jpg?anchor=center&mode=crop&width=640&height=0&format=auto&quality=90&rnd=132265866520000000"
              layout="fill"
              style={{
                width: "100%",
                boxShadow: "0 10px 10px #B8B8B8",
              }}
            />
            <h5
              style={{
                position: "absolute",
                top: "70%",
                color: "white",
                fontWeight: "700",
              }}
            >
              USA
            </h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div style={{ position: "relative" }}>
            {" "}
            <Image
              src="https://cdn2.wanderlust.co.uk/media/1010/re-cropped-portugal-treehouse-2.jpg?anchor=center&mode=crop&width=640&height=0&format=auto&quality=90&rnd=132265856050000000"
              layout="fill"
              style={{
                width: "100%",
                boxShadow: "0 10px 10px #B8B8B8",
              }}
            />
            <h5
              style={{
                position: "absolute",
                top: "70%",
                color: "white",
                fontWeight: "700",
              }}
            >
              Portugal
            </h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div style={{ position: "relative" }}>
            {" "}
            <Image
              src="https://cdn2.wanderlust.co.uk/media/1003/cropped-treehotel-ufo.jpg?anchor=center&mode=crop&width=640&height=0&format=auto&quality=90&rnd=132265002280000000"
              layout="fill"
              style={{
                width: "100%",
                boxShadow: "0 10px 10px #B8B8B8",
              }}
            />
            <h5
              style={{
                position: "absolute",
                top: "70%",
                color: "white",
                fontWeight: "700",
              }}
            >
              Sweden
            </h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div style={{ position: "relative" }}>
            <Image
              src="https://cdn2.wanderlust.co.uk/media/1002/cropped-chalkley-treehouse-night.jpg?anchor=center&mode=crop&width=1120&height=0&format=auto&quality=90&rnd=132264999760000000"
              layout="fill"
              style={{
                width: "100%",
                boxShadow: "0 10px 10px #B8B8B8",
              }}
            />{" "}
            <div>
              {" "}
              <h5
                style={{
                  position: "absolute",
                  top: "70%",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                SouthAfrica
              </h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CardComponent;
