import React from "react";
import { Col, Image, Container, Row } from "react-bootstrap";

const CardComponent = () => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row className="small">
        <Col xs={12} md={6} lg={6} xl={3}>
          <Image
            src="https://images.adsttc.com/media/images/5dea/0090/3312/fdbc/3500/01fb/large_jpg/02-%E6%A0%91%E5%B1%8B%E5%BB%BA%E7%AD%91%E5%8F%8A%E6%99%AF%E8%A7%82%E7%A9%BA%E9%97%B4%E6%95%B4%E4%BD%93%E9%B8%9F%E7%9E%B02.jpg?1575616647"
            layout="fill"
            style={{
              borderRadius: "10rem",
              width: "100%",
              boxShadow: "0 10px 10px rgb(36, 19, 35)",
            }}
          />
          <h5>china</h5>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <Image
            src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/at%2Farchive%2Fe2cac08a7934907541cde56b40f13a555ef415b1"
            layout="fill"
            style={{
              borderRadius: "10rem",
              width: "100%",
              boxShadow: "0 10px 10px rgb(36, 19, 35)",
            }}
          />
          <h5>france</h5>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <Image
            src="https://kerdowney.com/content/uploads/2013/04/Aranwa-Sala-de-Oxigenacion-01.jpg"
            layout="fill"
            style={{
              borderRadius: "10rem",
              width: "100%",
              boxShadow: "0 10px 10px rgb(36, 19, 35)",
            }}
          />
          <h5>peru</h5>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <Image
            src="https://theitalianwanderer.com/wp-content/uploads/2018/07/San-Luis5_Unterkunft-2-e1479397386599.jpg"
            layout="fill"
            style={{
              borderRadius: "10rem",
              width: "100%",
              boxShadow: "0 10px 10px rgb(36, 19, 35)",
            }}
          />
          <h5>italy</h5>
        </Col>
      </Row>
    </Container>
  );
};
export default CardComponent;
