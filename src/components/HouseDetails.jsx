import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Carousel } from "react-bootstrap";
import items from "../data/menu.json";
import DatePicker from "./DatePickerComponent";
import Footer from "./Footer";
import styles from "./HouseDetails.module.css";
const HouseDetails = ({ match }) => {
  const [houseItem, setHouseItem] = useState(null);

  useEffect(() => {
    let retrievedIdFromURL = match.params.houseId;

    let foundHouse = items.find(
      (house) => house.id.toString() === retrievedIdFromURL
    );

    console.log(foundHouse);
    setHouseItem(foundHouse);
  }, []);

  return (
    <div>
      <Container>
        {!houseItem ? (
          <p>LOADING...</p>
        ) : (
          <>
            <Container>
              <div className="house-info">
                <h2 className={styles["house-title"]}>{houseItem.name}</h2>
                <span>4.86(7 reviews)·</span>
                <address className={styles["house-address"]}>
                  Superho·Joncherey, Bourgogne Franche-Comté, France
                </address>
              </div>
              <div className="grid-container" style={{ marginTop: "1rem" }}>
                {houseItem.imgs.map((imgUrl, index) => {
                  return (
                    <div className={styles["house-image"]}>
                      <img src={imgUrl} alt="display image" />
                    </div>
                  );
                })}
              </div>
            </Container>

            <h4>Enter your date</h4>
            <div className="card">
              <DatePicker />
            </div>
          </>
        )}
        <Footer />
      </Container>
    </div>
  );
};

export default HouseDetails;
