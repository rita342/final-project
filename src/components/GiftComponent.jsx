import React from "react";
import { Col, Container } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const GiftComponent = () => {
  return (
    <>
      <Container>
        <Link to="/PaymentComponent/">
          <button
            style={{
              float: "right",
              color: "white",
              background: "#ff69b4",
              borderRadius: "4rem",
              border: "1px solid #ff69b4",
            }}
          >
            Buy The Gift Card
          </button>
        </Link>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: "4rem",
            marginTop: "10%",
            color: "#66D3FA",
          }}
        >
          <h1>Airbnb Gift Cards</h1>
        </div>

        <div
          style={{
            position: "relative",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "20%",
          }}
        >
          <Col
            style={{
              position: "absolute",
              left: "45%",
            }}
          >
            <img
              src="https://a0.muscache.com/im/pictures/5a262127-6957-4e1e-b87d-df6674c07d7a.jpg?im_w=480"
              width="30%"
              style={{
                Top: "3rem",
                transform: "rotate(120deg)",
              }}
            />
          </Col>
          <Col
            style={{
              position: "absolute",
              left: "15%",
            }}
          >
            <img
              src="https://a0.muscache.com/im/pictures/b3275f8d-4341-4800-bdf2-04be20e9112d.jpg?im_w=480"
              style={{
                Top: "3rem",
                width: "30%",
                transform: "rotate(60deg)",
              }}
            />
          </Col>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "25%",
          }}
        >
          <img
            src="https://a0.muscache.com/im/pictures/9196e84a-47e1-4fd2-8a6d-dc9face35440.jpg?im_w=1680"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "2rem",
            }}
          />
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default GiftComponent;
