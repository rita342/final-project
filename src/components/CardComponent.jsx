import React from "react";
import { Col, Image, Container, Row } from "react-bootstrap";

const CardComponent = () => {
  return (
    <>
      <h3
        style={{
          fontFamily: "cursive",
          fontSize: "20px",
          marginLeft: "7rem",
          fontWeight: "900",
          marginTop: "4rem",
          fontSize: "20px",
        }}
      >
        Destination in high demand
      </h3>
      <Container
        className="card"
        style={{
          marginTop: "1rem",
          padding: "30px",
          boxShadow: "rgb(188 177 177 / 20%) 10px 10px 10px 10px",
          border: "1px solid white",
          fontSize: "13px",
        }}
      >
        <Row className="small">
          <Col xs={6} md={6} lg={3} xl={3}>
            <div style={{ position: "relative" }}>
              <Image
                src="https://a0.muscache.com/im/pictures/9b6849e6-019b-46a5-a7d5-98736dcdeed2.jpg?im_w=1200"
                layout="fill"
                style={{
                  width: "100%",
                }}
              />
              <h5
                style={{
                  position: "absolute",
                  top: "70%",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "13px",
                  fontSize: "13px",
                }}
              >
                USA
              </h5>
            </div>
          </Col>
          <Col xs={6} md={6} lg={3} xl={3}>
            <div style={{ position: "relative" }}>
              {" "}
              <Image
                src="https://a0.muscache.com/im/pictures/254c9f06-3f22-4a8e-b5b4-0c5e9ccdfef1.jpg?im_w=1200"
                layout="fill"
                style={{
                  width: "100%",
                }}
              />
              <h5
                style={{
                  position: "absolute",
                  top: "70%",
                  color: "white",

                  fontSize: "13px",
                }}
              >
                France
              </h5>
            </div>
          </Col>
          <Col xs={6} md={6} lg={3} xl={3}>
            <div style={{ position: "relative" }}>
              {" "}
              <Image
                src="https://r3r6f7f6.stackpathcdn.com/wp-content/uploads/2017/03/188580866-768x541.jpg"
                layout="fill"
                style={{
                  width: "100%",
                }}
              />
              <h5
                style={{
                  position: "absolute",
                  top: "70%",
                  color: "white",

                  fontSize: "13px",
                }}
              >
                South Africa
              </h5>
            </div>
          </Col>
          <Col xs={6} md={6} lg={3} xl={3}>
            <div style={{ position: "relative" }}>
              <Image
                src="https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=1200"
                layout="fill"
                style={{
                  width: "100%",
                }}
              />{" "}
              <div>
                {" "}
                <h5
                  style={{
                    position: "absolute",
                    top: "70%",
                    color: "white",

                    fontSize: "13px",
                  }}
                >
                  Indonesia
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardComponent;
