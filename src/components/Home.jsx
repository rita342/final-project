import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import React, { Component } from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";
import imgcrop from "../images/cutmypic.png";

const Home = ({ history }) => {
  return (
    <>
      <div className="cover" style={{ position: "relative" }}>
        <img
          src="http://www.ihis.info/wp-content/uploads/2018/07/tree-house-resort-nice-on-home-intended-treehouse-american-21.jpg"
          layout="fill"
          objectFit="cover"
          style={{
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        />
        <div>
          <button
            onClick={() => {
              console.log("hello!");
              history.push("/menu");
            }}
            className="flexible-btn"
          >
            I,m flexible
          </button>
        </div>
      </div>

      <div>
        <CardComponent />
      </div>
      <div>
        <MediumCard />
      </div>
      <div></div>
    </>
  );
};

export default Home;
