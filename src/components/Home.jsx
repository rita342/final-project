import React, { Component } from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";

import { Modal, Button } from "react-bootstrap";
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
            top: "10%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            style={{
              background: "white",
              color: "#3C99DC",
              borderRadius: "3rem",
              border: "1px solid #d3d3d3",
              boxShadow: "0 3px 5px black",
              fontSize: "20px",
              fontWeight: "700",
            }}
            onClick={handleShow}
          >
            where are you going?
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            style={{ marginTop: "10rem" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Go anywhere anytime</Modal.Title>
            </Modal.Header>
            <h6 style={{ marginTop: "2rem", fontSize: "15px" }}>
              GO ANWHERE, ANYTIME
            </h6>
            <div>
              <Link to="/Menu/">
                <button
                  style={{
                    width: "70%",
                    marginTop: "1rem",
                    borderRadius: "3rem",
                    padding: "0.5rem",
                    textAlign: "start",
                    background: "white",
                    border: "1px solid #d3d3d3",
                    boxShadow: "0 3px 5px #ccc",
                    color: "rgb(155, 12, 143)",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  i'am flexible
                </button>
              </Link>
            </div>
            <Modal.Footer>
              <AiOutlineCloseCircle onClick={handleClose} />
            </Modal.Footer>
          </Modal>
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
