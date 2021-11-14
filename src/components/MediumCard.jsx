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

const MediumCard = () => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div className="card">
            <Image src={img1} layout="fill" style={{}} />
            <h5 style={{ marginLeft: "3rem" }}>Outdoor getways</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div class="card">
            <Image src={img2} layout="fill" />
            <h5 style={{ marginLeft: "3rem" }}>Unique Stays</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div class="card">
            <Image src={img3} layout="fill" />
            <h5 style={{ marginLeft: "3rem" }}>Entire homes</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={3}>
          <div class="card">
            <Image src={imgpet} layout="fill" />
            <h5 style={{ marginLeft: "3rem" }}>Pet allowed</h5>
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
      <h3>Discover Eeperiences</h3>
      <p>unique activities with local experts-in person online</p>
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
        <div
          className="row"
          style={{
            fontSize: "13px",
            marginTop: "15px",
            color: "grey",
            marginRight: "200px",
          }}
        >
          <div className="col-3 col-md-2">Historic Destination</div>
          <div className="col-3 col-md-2">Coastal Destination</div>
          <div className="col-3 col-md-2">Island Destination</div>
          <div className="col-3 col-md-3">Other Popular Destination</div>
        </div>
        <hr />
        <div id="row">
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Aberdeen</div>
            <div class="col-12 col-md-3">Aberystwyt</div>
            <div class="col-12 col-md-3">Alnwick</div>
            <div class="col-12 col-md-3">Budapest</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
          </div>

          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Berwick-upon-tweed</div>
            <div class="col-12 col-md-3">Boscastle</div>
            <div class="col-12 col-md-3">Brittany</div>
            <div class="col-12 col-md-3">Budapest</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Bourgogne-Franche-Comte</div>
            <div class="col-12 col-md-3">Hungary</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Cardiff</div>
            <div class="col-12 col-md-3">Castleton</div>
            <div class="col-12 col-md-3">Cheltenham</div>
            <div class="col-12 col-md-3">Conwy</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Wales</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Criccieth</div>
            <div class="col-12 col-md-3">Dartmouth</div>
            <div class="col-12 col-md-3">Donegal</div>
            <div class="col-12 col-md-3">Dublin</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Country Donegal</div>
            <div class="col-12 col-md-3">Country Dublin</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Dumfries</div>
            <div class="col-12 col-md-3">Durham</div>
            <div class="col-12 col-md-3">Galway</div>
            <div class="col-12 col-md-3">Glasgow</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">County Galway</div>
            <div class="col-12 col-md-3">Scotland</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Grassington</div>
            <div class="col-12 col-md-3">Harrogate</div>
            <div class="col-12 col-md-3">Hawes</div>
            <div class="col-12 col-md-3">Hay-on-wye</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Wales</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Inverness</div>
            <div class="col-12 col-md-3">Kielder</div>
            <div class="col-12 col-md-3">Krakow</div>
            <div class="col-12 col-md-3">Lisbon</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Lesser Poland Voivodeship</div>
            <div class="col-12 col-md-3">Lisbon Region</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Liangollen</div>
            <div class="col-12 col-md-3">Ludlow</div>
            <div class="col-12 col-md-3">Lymington</div>
            <div class="col-12 col-md-3">Malaga</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Andalusia</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Milan</div>
            <div class="col-12 col-md-3">Minehead</div>
            <div class="col-12 col-md-3">Murcia</div>
            <div class="col-12 col-md-3">Newcastle upon Tyne</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Lombadrdy</div>

            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Region of Murcia</div>
            <div class="col-12 col-md-3">England</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Nice</div>
            <div class="col-12 col-md-3">North Berwick</div>
            <div class="col-12 col-md-3">Norwich</div>
            <div class="col-12 col-md-3">Nottingham</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Provence-Alpes-Cote d'Azur</div>
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Oban</div>
            <div class="col-12 col-md-3">Palma</div>
            <div class="col-12 col-md-3">Pickering</div>
            <div class="col-12 col-md-3">Pitiochry</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">Balearic Islands Region</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Scotland</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Porthmadog</div>
            <div class="col-12 col-md-3">Portpatrick</div>
            <div class="col-12 col-md-3">Rye</div>
            <div class="col-12 col-md-3">Seahouses</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Skipton</div>
            <div class="col-12 col-md-3">Lianberis</div>
            <div class="col-12 col-md-3">St Andrews</div>
            <div class="col-12 col-md-3">St Austell</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">Scotland</div>
            <div class="col-12 col-md-3">England</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">Swanage</div>
            <div class="col-12 col-md-3">Swansea</div>
            <div class="col-12 col-md-3">Tintagel</div>
            <div class="col-12 col-md-3">West Wittering</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Wales</div>
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">England</div>
          </div>
          <div
            class="row"
            style={{
              marginRight: "200px",
              marginTop: "12px",
              color: "grey",
              fontSize: "13px",
            }}
          >
            <div class="col-12 col-md-3">York</div>
            <div class="col-12 col-md-3">Tokyo</div>
          </div>
          <div
            class="row"
            style={{ marginRight: "200px", color: "grey", fontSize: "13px" }}
          >
            <div class="col-12 col-md-3">England</div>
            <div class="col-12 col-md-3">Tokyo Region</div>
          </div>
        </div>
      </div>

      <hr />
      <div class="container" style={{ fontSize: "11px", color: "grey" }}>
        <div class="row" style={{ marginRight: "75px", color: "black" }}>
          <div class="col-12 col-md-3">ABOUT</div>
          <div class="col-12 col-md-3">COMMUNITY</div>
          <div class="col-12 col-md-3">HOST</div>
          <div class="col-12 col-md-3">SUPPORT</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">How Airbnb Works</div>
          <div class="col-12 col-md-3">Diversity & Belonging</div>
          <div class="col-12 col-md-3">Host your home</div>
          <div class="col-12 col-md-3">Our Covid-19 Response</div>
        </div>
        <div class="row" style={{ marginRight: "75px", color: "grey" }}>
          <div class="col-12 col-md-3">Newstroom</div>
          <div class="col-12 col-md-3">Accessiblity</div>
          <div class="col-12 col-md-3">Host Online Experience</div>
          <div class="col-12 col-md-3">Help Center</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Airbnb 2021</div>
          <div class="col-12 col-md-3">Airbnb Associates</div>
          <div class="col-12 col-md-3">Host an Experience</div>
          <div class="col-12 col-md-3">Cancellation options</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Investors</div>
          <div class="col-12 col-md-3">Frontline Stays</div>
          <div class="col-12 col-md-3">Responsible hosting</div>
          <div class="col-12 col-md-3">Neighbourhood Support</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Airbnb plus</div>
          <div class="col-12 col-md-3">Guest Referrals</div>
          <div class="col-12 col-md-3">Resource Center</div>
          <div class="col-12 col-md-3">Trust & Saftey</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Airbnb Lux</div>
          <div class="col-12 col-md-3">Airbnb.org</div>
          <div class="col-12 col-md-3">Community Center</div>
        </div>
        <div class="row" style={{ marginRight: "75px", marginTop: "5px" }}>
          <div class="col-12 col-md-3">HotelTonight</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Airbnb for Work</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Made possible by Hosts</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Careers</div>
        </div>
        <div
          class="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div class="col-12 col-md-3">Founder's Letter</div>
        </div>
      </div>
    </Container>
  );
};

export default MediumCard;
