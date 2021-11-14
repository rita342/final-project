import React from "react";
import imgpet from "../images/img-pet.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/imgcrop.jpg";
import img31 from "../images/img31.jpg";
import img32 from "../images/img32.jpg";
import img33 from "../images/img33.jpg";
import img41 from "../images/img41.jpg";
import { Col, Container, Row, Image } from "react-bootstrap";
import FooterHome from "./FooterHome";

const MediumCard = () => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row className="card-medium">
        <Col xs={12} md={6} lg={6} xl={3}>
          <div className="card">
            <Image src={img1} layout="fill" style={{}} />
            <h5 >Outdoor getways</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div class="card">
            <Image src={img2} layout="fill" />
            <h5 >Unique Stays</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div class="card">
            <Image src={img3} layout="fill" />
            <h5>Entire homes</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div class="card">
            <Image src={imgpet} layout="fill" />
            <h5>Pet allowed</h5>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12}>
          <Image
            src={img4}
            layout="fill"
            objectFit="cover"
            style={{
              width: "100%",
              borderRadius: "10px",
              height: "400px",
              marginTop: "5rem",
              marginBottom: "5rem",
            }}
          />


        </Col>
      </Row>
      <div>
      <h3>Discover Eeperiences</h3>
      <p>unique activities with local experts-in person online</p>
      </div>
      <Row>
        <Col xs={12} md={6} lg={6} xl={4}>
          <div className="card">
            <Image src={img31} layout="fill" style={{}} />


          </div>
          <h5>Out Door collection</h5>
          <p>Experiences tht immerse you in nature</p>
        </Col>
        <Col xs={12} md={6} lg={6} xl={4}>
          <div class="card">
            <Image src={img32} layout="fill" />
          </div>
          <h5>Online Experiences</h5>
          <p>Live interactive activities led by Hosts</p>
        </Col>

        <Col xs={12} md={6} lg={6} xl={4}>
          <div class="card">
            <Image src={img33} layout="fill" />
          </div>
          <h5>Experiences</h5>
          <p>Local things to do wherever you are</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={6} xl={6}>
          <div>
            <div style={{ background: "black", height: "300px" }}></div>
          </div>
          <h5>Out Door collection</h5>
          <p>Experiences tht immerse you in nature</p>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <div>
            <Image
              src={img41}
              layout="fill"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <h5>Online Experiences</h5>
          <p>Live interactive activities led by Hosts</p>
        </Col>
      </Row>
      <div>
        <h2
          style={{
            fontize: "27px",
            marginTop: "20px",
            marginRigh: "30px",
            fontWeight: "500px",
          }}
        >
          <strong>Inspiration for future get ways</strong>
        </h2>
       
        </div>
        <FooterHome/>
    </Container>
  );
};

export default MediumCard;
