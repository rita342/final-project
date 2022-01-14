import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { img, title } from "./Data";
import { img1 } from "../images/img1.jpg";

const UniquePlaceTree = () => {
  return (
    <>
      <div>
        <Row>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://robbreport.com/wp-content/uploads/2019/06/kingston-treehouse.jpg?resize=768,432"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}>
              Ivory Lodge in Lion Sands, South Africa
            </h6>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://robbreport.com/wp-content/uploads/2019/06/matangi-treehouse-view.jpg?resize=768,432"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "10px" }}>
              Matangi Private Island Resort, Fiji
            </h6>
          </Col>

          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://robbreport.com/wp-content/uploads/2019/06/treehotel.jpg?resize=768,432"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}>Treehotel, Harads, Sweden</h6>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://robbreport.com/wp-content/uploads/2017/11/segera-naypalad_birdnest_sunrise_rgb.jpg?resize=768,432"
              style={{ width: "100%", height: "170px" }}
            />
            <h6 style={{ fontSize: "11px" }}>Segera Retreat, Kenya</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UniquePlaceTree;
