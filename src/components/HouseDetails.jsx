import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Carousel } from "react-bootstrap";
import items from "../data/menu.json";
import DatePicker from "./DatePickerComponent";
import Rating from "./Rating";
import Reserve from "./Reserve";
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
    <div className="flex-center">
      {!houseItem ? (
        <p>LOADING...</p>
      ) : (
        <div className="screen">
          <div>
            <h2 className={styles["house-title"]}>{houseItem.name}</h2>
            <div className={styles["house-info"]}>
              <Rating />
              <span className={styles["house-address"]}>
                Superho·Joncherey, Bourgogne Franche-Comté, France
              </span>
            </div>
          </div>
          <div className="grid-container" style={{ marginTop: "1rem" }}>
            {houseItem.imgs.map((imgUrl) => {
              return (
                <div className={styles["house-image"]}>
                  <img src={imgUrl} alt="display image" />
                </div>
              );
            })}
          </div>
          <div className={styles["house-details-container"]}>
            <div className="house-details">
              <h4>Enter your date</h4>

              <DatePicker />
            </div>
            <div>
              <Reserve />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default HouseDetails;
