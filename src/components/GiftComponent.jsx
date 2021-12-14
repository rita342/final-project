import React from "react";
import { Col, Container } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const GiftComponent = () => {
  return (
    <>
      <hr
        style={{
          boxShadow: "2px 2px 2px rgb(gray)",
          height: "2px",
        }}
      />

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
      <Container
        style={{
          marginLeft: "20%",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            marginTop: "5%",
            color: "#66D3FA",
          }}
        >
          <h4> What is Airbnb Gift Cards</h4>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            An Airbnb gift card is a great present for a friend or family
            member. <br />
          </span>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            {" "}
            who loves to travel Airbnb gift cards allow the recipient the
            flexibility <br />
          </span>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            {" "}
            to book a stay or experience, and don’t limit them by an expiration
            date.
          </span>
        </div>
        <div
          style={{
            fontSize: "1rem",
            marginTop: "5%",
            color: "#66D3FA",
          }}
        >
          <h4>How Airbnb Gift Cards Work</h4>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            Airbnb offers gift cards that can be used on stays and experiences.{" "}
            <br />
          </span>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            {" "}
            They’re available in both physical and digital form and can be
            applied
            <br />
            on the website or mobile app
            <br />
          </span>
        </div>

        <div
          style={{
            position: "relative",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <Col
            style={{
              position: "absolute",
              left: "25%",
            }}
          >
            <img
              src="https://a0.muscache.com/im/pictures/5a262127-6957-4e1e-b87d-df6674c07d7a.jpg?im_w=480"
              width="20%"
              style={{
                Top: "3rem",
                transform: "rotate(60deg)",
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
                width: "20%",
                transform: "rotate(120deg)",
              }}
            />
          </Col>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default GiftComponent;
