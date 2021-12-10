import React from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";
import { Modal, Button, Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import items from "../data/menu.json";
import { AiFillHeart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const search = params.get("search");

  console.log(params, search);
  return (
    <>
      <div
        className="cover"
        style={{
          position: "relative",
        }}
      >
        <img
          src="http://www.ihis.info/wp-content/uploads/2018/07/tree-house-resort-nice-on-home-intended-treehouse-american-21.jpg"
          layout="fill"
          objectFit="cover"
          style={{
            backgroundRepeat: "no-repeat",
            width: "100%",
            borderBottomLeftRadius: "30% 30% ",
            borderBottomRightRadius: "30% 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "3",
            background: "rgb(30 32 36 / 50%)",
            borderBottomLeftRadius: "30% 30% ",
            borderBottomRightRadius: "30% 30%",
          }}
        >
          <div
            classNme="where-you-move"
            style={{
              position: "absolute",
              top: "13%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",

              color: "white",
            }}
          >
            <h1 style={{ color: "white" }}>
              <span className="span"></span>
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "25%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <input
              type="text"
              placeholder="    search... "
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              style={{
                borderRadius: "30px",
                border: "1px solid grey",
                width: "40%",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "45%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Link to="/Menu/">
              <Button
                className="where-btn"
                style={{
                  background: "transparent",
                  color: "pink",
                  borderRadius: "3rem",
                  border: "1px solid #d3d3d3",
                  top: "40%",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                where are you going?
              </Button>
            </Link>
          </div>
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
}
