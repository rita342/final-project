import React, { Component } from "react";
import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import Footer from "./Footer";
const GiftComponent = () => {
  return (
    <>
      <Container>
        <h1
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: "7rem",
            marginTop: "10rem",
          }}
        >
          Airbnb Gift Cards
        </h1>

        <div>
          <img
            src="https://a0.muscache.com/im/pictures/aed25c7b-dfd5-45e2-aec9-0eb4d9a21e08.jpg?im_w=960"
            width="80%"
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",

              marginTop: "10rem",
            }}
          />
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://a0.muscache.com/im/pictures/ad4481c2-d06c-47a1-9de9-2d76c4c0c832.jpg?im_w=1680"
            style={{
              width: "100%",
            }}
          />
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default GiftComponent;
