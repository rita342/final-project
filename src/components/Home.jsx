import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import React, { Component } from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";

const Home = ({ history }) => {
  return (
    <>
      <div className="cover">
        <div className="relative">
          <img
            src="https://a0.muscache.com/im/pictures/d7c1f140-c33a-4d68-aaf8-b7b8d7292b11.jpg?im_w=1200"
            layout="fill"
            objectFit="cover"
            style={{
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          />
          <div>
            <h5 className="tree-quote">
              <span>"TREE</span>
              <span> HOUSES</span>
              <span>ARE </span>
              <span>THE </span>
              <span>ULTIMATE</span>
              <span>RETURN </span>
              <span>TO </span>
              <span>NATURE"</span>
            </h5>
          </div>

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
