import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import FooterHome from "./FooterHome";
import { Link } from "react-router-dom";

const MediumCard = ({ history }) => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <h4
        style={{
          display: "flex",
          alignItems: "cente",
          justifyContent: "center",
          color: "black",
        }}
      >
        introducing
      </h4>
      <h4
        style={{
          color: "#66D3FA",
          fontSize: "2rem",
          display: "flex",
          alignItems: "cente",
          justifyContent: "center",
        }}
      >
        Airbnb gift cards
      </h4>

      <div>
        <div
          style={{
            marginTop: "3rem",
            borderRadius: "25px 75px 63px ",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            src="https://a0.muscache.com/im/pictures/9196e84a-47e1-4fd2-8a6d-dc9face35440.jpg?im_w=1680"
            layout="fill"
            width=" 100%"
            height="100%"
            style={{
              borderRadius: "2rem",
            }}
          />
          <div>
            <h4>
              <Image
                src="https://a0.muscache.com/im/pictures/b3275f8d-4341-4800-bdf2-04be20e9112d.jpg?im_w=480"
                width="20%"
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "35%",
                  transform: "rotate(60deg)",
                }}
              />
            </h4>
            <h4>
              <Image
                src="https://a0.muscache.com/im/pictures/5a262127-6957-4e1e-b87d-df6674c07d7a.jpg?im_w=480"
                width="20%"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  transform: "rotate(120deg)",
                }}
              />
            </h4>

            <Link to="/GiftComponent">
              <button
                style={{
                  left: "20%",
                  color: " black",
                  position: "absolute",
                  border: "1px solid #66D3FA",
                  borderRadius: "2rem",
                  padding: "0.5rem 1.5rem",
                  background: "white",
                  top: "5rem",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",

            position: "relative",
          }}
        >
          <Image
            src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&im_q=highq"
            layout="fill"
            width=" 100%"
            height="100%"
            style={{ borderRadius: "25px 25px  " }}
          />
          <h3
            style={{
              top: "14%",
              left: "15%",
              color: " white",
              position: "absolute",
            }}
          >
            Things to do on your trip
          </h3>
          <button
            style={{
              top: "25%",
              left: "15%",
              color: "black",
              position: "absolute",
              background: "white",
              border: "1px solid white",
              borderRadius: "0.3rem",
              padding: "5px",
            }}
          >
            Experiences
          </button>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <FooterHome />
      </div>
    </Container>
  );
};

export default MediumCard;
