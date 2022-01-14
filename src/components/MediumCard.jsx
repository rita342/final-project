import React from "react";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import FooterHome from "./FooterHome";
import { Link } from "react-router-dom";
import { BsFillTreeFill } from "react-icons/bs";
import UniquePlace from "./UniquePlace";
import { useState } from "react";
import Data from "./Data";
import UniquePlaceTwo from "./UniquePlaceTwo";
import UniquePlaceTree from "./UniquePlaceTree";

export default function MediumCard() {
  const [active, setActive] = useState("firstcard");

  const url =
    "https://media.istockphoto.com/photos/beautiful-creative-tree-house-picture-id179252637?k=20&m=179252637&s=612x612&w=0&h=euOb0XbBx5QJ9n8HlEt4aVMWOvnurN-ranqPsofi1Wc=";
  return (
    <Container style={{ marginTop: "5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Card
          style={{
            width: "40rem",
            border: "1px solid white",
            borderRadius: "3rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://lp-cms-production.imgix.net/image_browser/treehousesnight.jpg"
            style={{
              width: "40rem",
              border: "1px solid white",
              borderRadius: "3rem",
            }}
          />{" "}
        </Card>
        <div>
          <Link to="/GiftComponent">
            <button
              style={{
                left: "27%",
                color: " white",
                position: "absolute",
                border: "1px solid #66D3FA",
                borderRadius: "2rem",
                padding: "0.5rem 1.5rem",
                background: "black",
                top: "17rem",
                border: "1px solid #66D3FA",
              }}
            >
              Learn More
            </button>
            <h4
              style={{
                color: "white",
                fontSize: "2rem",
                position: "absolute",
                left: "27%",
                top: "13rem",
              }}
            >
              Treehouse Giftcard
            </h4>
          </Link>
        </div>
      </div>
      <hr style={{ marginTop: "3rem" }}></hr>
      <div style={{ display: "flex" }}>
        <div>
          <h4
            onClick={() => setActive("firstcard")}
            style={{
              fontSize: "15px",
              padding: "10px",
              color: "gray",
              cursor: "pointer",
            }}
          >
            Treehouses near water
          </h4>
        </div>
        <div>
          <h4
            onClick={() => setActive("secondtcard")}
            style={{
              fontSize: "15px",
              padding: "10px",
              color: "gray",
              cursor: "pointer",
            }}
          >
            Unique feature Treehouses
          </h4>
        </div>
        <div>
          <h4
            onClick={() => setActive("thirdcard")}
            style={{
              fontSize: "15px",
              padding: "10px",
              color: "gray",
              cursor: "pointer",
            }}
          >
            Amazing and Luxurious Treehouses
          </h4>
        </div>
      </div>
      <hr style={{}}></hr>
      <div></div> {active === "firstcard" && <UniquePlace />}
      {active === "secondtcard" && <UniquePlaceTwo />}
      {active === "thirdcard" && <UniquePlaceTree />}
      <div></div>
      <hr style={{ marginTop: "5rem" }}></hr>
      <div>
        {" "}
        <Row>
          <Col>
            <img
              src="https://thumbor.forbes.com/thumbor/900x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1068867780%2F960x0.jpg%3Ffit%3Dscale"
              style={{ width: "100%" }}
            />
          </Col>
          <Col>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5805a8f4f7e0ab27d7651146/1626058563629-3FYWCB3YKMYWM0EQ860P/Screen-Shot-2020-02-21-at-11.22.14-AM-800x526.jpg?format=1500w"
              style={{ width: "100%", height: "95%" }}
            />
          </Col>
        </Row>
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
      <div style={{ marginTop: "5rem" }}>
        <FooterHome />
      </div>
    </Container>
  );
}
