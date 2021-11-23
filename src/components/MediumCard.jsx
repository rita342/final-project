import React from "react";
import img41 from "../images/img41.jpg";
import { Col, Container, Row, Image } from "react-bootstrap";
import FooterHome from "./FooterHome";
import { Link } from "react-router-dom";

const MediumCard = ({ history }) => {
  return (
    <div>
      <div
        style={{
          marginTop: "10rem",
          borderRadius: "25px 75px 63px ",
          boxShadow: "10px 14px 8px 10px rgba(1, 1, 1, 0.2)",
        }}
      >
        <Image
          src="https://c4.wallpaperflare.com/wallpaper/138/751/615/new-year-fireworks-snow-bisbiswas-trees-hd-wallpaper-preview.jpg"
          layout="fill"
          width=" 100%"
          style={{
            position: "relative",
          }}
        />
        <div>
          <h4>
            <Image
              src="https://a0.muscache.com/im/pictures/aed25c7b-dfd5-45e2-aec9-0eb4d9a21e08.jpg?im_w=960"
              width="30%"
              style={{
                position: "absolute",
                marginTop: "-50%",
                left: "60%",
              }}
            />
          </h4>

          <h4
            style={{
              position: "absolute",
              marginTop: "-48%",
              left: "15%",
              color: "white",
              fontSize: "3rem",
              overflow: "hidden",
            }}
          >
            Airbnb gift cards
          </h4>
          <Link to="/GiftComponent">
            <button
              style={{
                position: "absolute",
                marginTop: "-42%",
                left: "23%",
                color: "white",
                overflow: "hidden",
                background: "black",
                border: "1px solid black",
                borderRadius: "2rem",
                padding: "0.5rem 0.5rem",
              }}
            >
              shop now
            </button>
          </Link>
        </div>
      </div>

      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div>
              <div style={{ background: "black", height: "300px" }}></div>
            </div>
            <h5>Out Door collection</h5>
            <p>Experiences tht immerse you in nature</p>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div>
              <Image
                src={img41}
                layout="fill"
                style={{ height: "300px", width: "100%" }}
              />
            </div>
            <h5>Online Experiences</h5>
            <p>Live interactive activities led by Hosts</p>
          </Col>
        </Row>
        <div>
          <h2
            style={{
              fontize: "27px",
              marginTop: "20px",
              marginRigh: "30px",
              fontWeight: "500px",
            }}
          >
            <strong>Inspiration for future get ways</strong>
          </h2>
        </div>
        <FooterHome />
      </Container>
    </div>
  );
};

export default MediumCard;
