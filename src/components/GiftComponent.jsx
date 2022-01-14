import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BsFillTreeFill } from "react-icons/bs";
import StripeCheckout from "react-stripe-checkout";

const GiftComponent = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JzMv3Jjy2UsZKBIl9ahKEfyW32EkY5I91AXbEbULKYvo8NgbGuTtnHCDv3bUkHwY1tXlZpDB9cgCTi5LQV0InNc00VTPPbduj";

  const onToken = (token) => {
    console.log(token);
    alert("your payment is successful!!");
  };
  return (
    <>
      <div
        style={{
          marginLeft: "20%",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            marginTop: "5%",
            color: "#66D3FA",
          }}
        >
          <h4> What is Treehouse Cards</h4>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            An Treehouse card is a great present for a friend or family member.{" "}
            <br />
          </span>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            {" "}
            who loves to travel Treehouse cards allow the recipient the
            flexibility <br />
          </span>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            {" "}
            to book a stay or experience, and don’t limit them by an expiration
            date.
          </span>
        </div>
        <div
          style={{
            fontSize: "1rem",
            marginTop: "5%",
            color: "#66D3FA",
          }}
        >
          <hr style={{ width: "80%" }} />
          <h4>How Treehouse Cards Work</h4>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            Treehouse offers cards that can be used on stays and experiences.{" "}
            <br />
          </span>
          <span
            style={{
              fontSize: "1rem",

              color: "black",
            }}
          >
            {" "}
            They’re available in both physical and digital form and can be
            applied
            <br />
            on the website or mobile app
            <br />
          </span>
        </div>
        <hr style={{ width: "80%" }} />
        <Row>
          <Col xs={12} md={6} lg={6} xl={3}>
            <div
              style={{
                position: "relative",
              }}
            >
              <h4
                style={{
                  position: "absolute",
                  marginTop: "2rem",
                  width: "200px",
                  height: "200px",
                  background: "pink",
                  borderRadius: "20px",
                  border: "1px solid rgb(255 255 255)",
                  boxShadow: "rgb(122 122 122 / 20%) 10px 10px 10px 10px;",
                }}
              ></h4>
              <BsFillTreeFill
                style={{
                  fontSize: "5rem",
                  color: "#26580F",
                  position: "absolute",
                  marginTop: "3rem",
                }}
              />
              <h4
                style={{
                  color: "#985321",
                  fontFamily: "cursive",
                  fontSize: "18px",
                  marginLeft: "-1.5rem",
                  fontWeight: "900",
                  position: "absolute",
                  marginTop: "3rem",
                  marginLeft: "55px",
                }}
              >
                Treehouse
              </h4>
              <h4
                style={{
                  color: "black",
                  fontFamily: "cursive",
                  fontSize: "12px",
                  marginLeft: "-1.5rem",
                  fontWeight: "900",
                  position: "absolute",
                  marginTop: "11rem",
                  marginLeft: "1rem",
                }}
              >
                Christmass card
              </h4>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={3}>
            <div style={{ marginTop: "3rem" }}>
              <div>
                <h3
                  style={{
                    color: "#66D3FA",
                  }}
                >
                  Treehouse Card
                </h3>
                <h6
                  style={{
                    color: "black",
                  }}
                >
                  Amount :50$
                </h6>
                <StripeCheckout
                  label="Pay Now"
                  billingAddress
                  shippingAddress
                  amount={priceForStripe}
                  panelLabel="Pay Now"
                  token={onToken}
                  stripeKey={publishableKey}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GiftComponent;
