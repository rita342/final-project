import { useContext, useEffect, useState } from "react";
import items from "../data/menu.json";
import DatePicker from "./DatePickerComponent";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Reserve from "./Reserve";
import Footer from "./Footer";
import styles from "./HouseDetails.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FavoriteContext } from "../store/Favorite";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const HouseDetails = ({ match }) => {
  const context = useContext(FavoriteContext);

  const [houseItem, setHouseItem] = useState(null);
  const [reservatonData, setReservationData] = useState(null);
  function reservationHandler(reservation) {
    setReservationData(reservation);
  }
  function confirmHandler() {
    setReservationData(null);
  }
  function cancelHandler() {
    setReservationData(null);
  }
  function saveFavoriteHandler() {
    context.addFavorite(houseItem);
  }
  function removeFavoriteHandler() {
    context.removeFavorite(houseItem);
  }
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
      {reservatonData && (
        <Modal
          title="Are you sure you want to make a reservation?"
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        >
          <div>Number of adult guests: {reservatonData.guests.adult}</div>
          <div>Number of child guests: {reservatonData.guests.children}</div>
          <div>Number of infant guests: {reservatonData.guests.infant}</div>
        </Modal>
      )}
      {!houseItem ? (
        <p>LOADING...</p>
      ) : (
        <div className="screen">
          <div>
            <div style={{ display: "flex" }}>
              <h2 className={styles["house-title"]}>{houseItem.name}</h2>
              {context.isFavorite(houseItem) ? (
                <AiFillHeart
                  onClick={removeFavoriteHandler}
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700px",
                    marginLeft: "1rem",
                    color: "#ff1493",
                    marginTop: "-5px",
                  }}
                />
              ) : (
                <AiOutlineHeart
                  onClick={saveFavoriteHandler}
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginLeft: "1rem",
                    marginTop: "-5px",
                  }}
                />
              )}{" "}
              <h2 className={styles["house-title"]}> save</h2>
            </div>
            <div className={styles["house-actions-container"]}>
              <div className={styles["house-info"]}>
                <Rating />
                <span className={styles["house-address"]}>
                  Superho·Joncherey, Bourgogne Franche-Comté,{" "}
                  {houseItem.country}
                </span>
              </div>

              <hr />
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
          <div className="room-num" style={{ marginTop: "2rem" }}>
            <AiFillStar />
            {""} {houseItem.numberOfRoom}
          </div>
          <hr style={{ marginRight: "25rem" }} />
          <div className="room-num" style={{ marginTop: "2rem" }}>
            <div>
              <div>
                {" "}
                <AiOutlineHome /> {""}Entire home
              </div>
              <div>
                {" "}
                <BsKey /> {""}Great check-in experiance
              </div>
              <div>
                {" "}
                <MdDateRange /> {""}Free cancellation before jan 4
              </div>
            </div>
            <span></span>
          </div>
          <hr style={{ marginRight: "25rem" }} />
          {houseItem.description}
          <hr style={{ marginRight: "25rem" }} />
          <div className={styles["house-details-container"]}>
            <div className="house-details">
              <h4>Enter your date</h4>

              <DatePicker />
            </div>

            <div>
              <Reserve itemDetails={houseItem} onReserve={reservationHandler} />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default HouseDetails;
