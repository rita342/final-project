import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { img, title } from "./Data";
import { img1 } from "../images/img1.jpg";

const UniquePlaceTwo = () => {
  return (
    <>
      <div>
        <Row>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://static.boredpanda.com/blog/wp-content/uuuploads/amazing-treehouses/amazing-treehouses-10.jpg"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}>Mirror Tree House (Sweden)</h6>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://static.boredpanda.com/blog/wp-content/uuuploads/amazing-treehouses/amazing-treehouses-15.jpg"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}>
              {" "}
              Yellow Treehouse (New Zealand)
            </h6>
          </Col>

          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://static.boredpanda.com/blog/wp-content/uuuploads/amazing-treehouses/amazing-treehouses-13.jpg"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}>The HemLoft Treehouse (Canada)</h6>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://static.boredpanda.com/blog/wp-content/uuuploads/amazing-treehouses/amazing-treehouses-12.jpg"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}> Plane Treehouse (Costa Rica)</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UniquePlaceTwo;
