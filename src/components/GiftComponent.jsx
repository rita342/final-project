import React, { Component } from "react";
import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const GiftComponent = () => {
  return (
    <>
      <Container>
        <button
          style={{
            alignItems: "end",
            display: "flex",
            justifyContent: "right",
            color: "white",
            background: "pink",
          }}
        >
          Buy The Gift Card
        </button>
        <Link to="/PaymentComponent/">
          <h1
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              fontSize: "5rem",
              marginTop: "5%",
            }}
          >
            Airbnb Gift Cards
          </h1>
        </Link>

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
