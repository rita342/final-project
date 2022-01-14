import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { img, title } from "./Data";
import { img1 } from "../images/img1.jpg";

const UniquePlace = ({ title }) => {
  return (
    <>
      <div>
        <Row>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://www.canopyandstars.co.uk/var/self_catering_site/storage/images/canopy-and-stars/norway/southern-norway/vest-agder/treetop-fiddan/treetop-fiddan/treetop-fiddan-gallery/view-from-the-wooden-walkway-across-the-river-to-treetop-fiddan-tree-house-in-southern-norway/190009270-1-eng-GB/view-from-the-wooden-walkway-across-the-river-to-treetop-fiddan-tree-house-in-southern-norway_cs_large_gallery_preview.jpg"
              style={{ width: "100%" }}
            />
            <h5 style={{ fontSize: "11px" }}>NORWAY</h5>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://www.journeyera.com/wp-content/uploads/2018/03/nusa-penida-treehouse-rumah-pohon-05829-768x512.jpg.webp"
              style={{ width: "100%" }}
            />{" "}
            <h5 style={{ fontSize: "11px" }}>INDONESIA</h5>
          </Col>

          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://www.fodors.com/wp-content/uploads/2018/11/5-Out-n-About-Treehouses-Treesort.jpg"
              style={{ width: "100%" }}
            />{" "}
            <h5 style={{ fontSize: "11px" }}>U.S</h5>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <img
              src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-470/uploads/2015/05/The-Vythiri-Resort.jpg"
              style={{ width: "100%" }}
            />{" "}
            <h5 style={{ fontSize: "11px" }}>INDIA</h5>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UniquePlace;
