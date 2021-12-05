import React, { Component } from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";

import { Modal, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "3",
            background: "rgb(30 32 36 / 50%)",
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
              top: "35%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              className="where-btn"
              style={{
                background: "transparent",
                color: "pink",
                borderRadius: "3rem",
                border: "1px solid #d3d3d3",

                fontSize: "20px",
                fontWeight: "700",
              }}
              onClick={handleShow}
            >
              where are you going?
            </Button>

            <Modal
              className="Home-modal"
              show={show}
              onHide={handleClose}
              animation={false}
              style={{ marginTop: "17rem" }}
            >
              <h6
                style={{
                  marginLeft: "2rem",
                  fontSize: "11px",
                  marginTop: "0.5rem",
                }}
              >
                GO ANWHERE, ANYTIME
              </h6>
              <div>
                <Link to="/Menu/">
                  <button
                    style={{
                      width: "70%",
                      marginTop: "0.5rem",
                      borderRadius: "3rem",
                      padding: "0.5rem",
                      textAlign: "start",
                      background: "white",
                      border: "1px solid #d3d3d3",
                      boxShadow: "0 3px 5px #ccc",
                      color: "rgb(155, 12, 143)",
                      fontSize: "20px",
                      fontWeight: "700",
                      marginLeft: "2rem",
                    }}
                  >
                    i'am flexible
                  </button>
                </Link>
              </div>
              <h5>
                <AiOutlineCloseCircle
                  onClick={handleClose}
                  style={{ float: "right", marginRight: "10px" }}
                />
              </h5>
            </Modal>
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
};

export default Home;
