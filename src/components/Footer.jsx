import { MdOutlineFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div style={{ width: "100%", marginTop: "10rem" }}>
      <hr style={{ background: "#E8E8E8" }} />
      <div className="container" style={{ fontSize: "11px", color: "#E8E8E8" }}>
        <div
          className="row"
          style={{
            marginRight: "95px",
            color: "black",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "30px",
          }}
        >
          <div className="col-12 col-md-3">ABOUT</div>
          <div className="col-12 col-md-3">COMMUNITY</div>
          <div className="col-12 col-md-3">HOST</div>
          <div className="col-12 col-md-3">SUPPORT</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">How Airbnb Works</div>
          <div className="col-12 col-md-3">Diversity & Belonging</div>
          <div className="col-12 col-md-3">Host your home</div>
          <div className="col-12 col-md-3">Our Covid-19 Response</div>
        </div>
        <div className="row" style={{ marginRight: "75px", color: "grey" }}>
          <div className="col-12 col-md-3">Newstroom</div>
          <div className="col-12 col-md-3">Accessiblity</div>
          <div className="col-12 col-md-3">Host Online Experience</div>
          <div className="col-12 col-md-3">Help Center</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Airbnb 2021</div>
          <div className="col-12 col-md-3">Airbnb Associates</div>
          <div className="col-12 col-md-3">Host an Experience</div>
          <div className="col-12 col-md-3">Cancellation options</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Investors</div>
          <div className="col-12 col-md-3">Frontline Stays</div>
          <div className="col-12 col-md-3">Responsible hosting</div>
          <div className="col-12 col-md-3">Neighbourhood Support</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Airbnb plus</div>
          <div className="col-12 col-md-3">Guest Referrals</div>
          <div className="col-12 col-md-3">Resource Center</div>
          <div className="col-12 col-md-3">Trust & Saftey</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Airbnb Lux</div>
          <div className="col-12 col-md-3">Airbnb.org</div>
          <div className="col-12 col-md-3">Community Center</div>
        </div>
        <div className="row" style={{ marginRight: "75px", marginTop: "5px" }}>
          <div className="col-12 col-md-3">HotelTonight</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Airbnb for Work</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Made possible by Hosts</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Careers</div>
        </div>
        <div
          className="row"
          style={{ marginRight: "75px", marginTop: "5px", color: "grey" }}
        >
          <div className="col-12 col-md-3">Founder's Letter</div>
          <p>
            <MdOutlineFacebook style={{ fontSize: "30px" }} />
          </p>
          <p>
            <BsTwitter style={{ fontSize: "30px", padding: "5px" }} />
          </p>
        </div>{" "}
        <h6>2021 Airbnb,Inc.</h6>
        <h6>Privacy .Terms .Sitemap</h6>{" "}
      </div>
    </div>
  );
}
