import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import React, { Component } from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";
import { useState } from "react";
import items from "../data/menu.json";
import { Link } from "react-router-dom";
import { BiGlobe, BiSearch } from "react-icons/bi";
const Home = ({ history }) => {
  return (
    <>
      <div className="cover">
        <div className="relative">
          <img
            src="https://a0.muscache.com/im/pictures/9d928940-f0d1-4504-99d3-b69a5f737012.jpg?im_w=1200"
            layout="fill"
            objectFit="cover"
            style={{
              backgroundRepeat: "no-repeat",
              width: "100%",

              position: "relative",
            }}
          />
          <h5 className="tree-quote">
            "TREE HOUSES ARE THE ULTIMATE RETURN TO NATURE"
          </h5>

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
    </>
  );
};

export default Home;
