import React from "react";
import img41 from "../images/img41.jpg";
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
          color: "black",
          fontSize: "4rem",
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

            position: "relative",
          }}
        >
          <Image
            src="https://img2.goodfon.com/wallpaper/nbig/f/30/christmas-night-winter-snow-6994.jpg"
            layout="fill"
            width=" 100%"
            height="100%"
            style={{
              borderRadius: "5rem",
              boxShadow: "10px 14px 8px 10px rgba(1, 1, 1, 0.2)",
            }}
          />
          <div>
            <h4>
              <Image
                src="https://a0.muscache.com/im/pictures/b3275f8d-4341-4800-bdf2-04be20e9112d.jpg?im_w=480"
                width="30%"
                style={{
                  position: "absolute",
                  marginTop: "-50%",
                  left: "60%",
                  transform: "rotate(60deg)",
                }}
              />
            </h4>
            <h4>
              <Image
                src="https://a0.muscache.com/im/pictures/5a262127-6957-4e1e-b87d-df6674c07d7a.jpg?im_w=480"
                width="30%"
                style={{
                  position: "absolute",
                  marginTop: "-35%",
                  left: "60%",
                  transform: "rotate(120deg)",
                }}
              />
            </h4>

            <Link to="/GiftComponent">
              <button
                style={{
                  marginTop: "-40%",
                  left: "33%",
                  color: " #3C99DC",
                  position: "absolute",
                  border: "1px solid #66D3FA",
                  borderRadius: "2rem",
                  padding: "0.5rem 1.5rem",
                  background: "white",
                }}
              >
                shop now
              </button>
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "5rem" }}>
          <FooterHome />
        </div>
      </div>
    </Container>
  );
};

export default MediumCard;
