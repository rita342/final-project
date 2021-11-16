import Rating from "./Rating";
import styles from "./Reserve.module.css";
import DatePicker from "./DatePickerComponent";
import Guests from "./Guests";
import { useState } from "react";
import moment from "moment";

export default function Reserve(props) {
  const [guestsCount, setGuestsCount] = useState(null);
  const [reservationDateRange, setReservationDateRange] = useState(null);
  function reserveHandler() {
    props.onReserve({ guests: guestsCount, dateRange: reservationDateRange });
  }
  function guestsCountChangeHandler(newGuestsCount) {
    setGuestsCount(newGuestsCount);
  }
  function reservationDateRangeChangeHandler({ startDate, endDate }) {
    setReservationDateRange({
      startDate,
      endDate,
    });
  }
  function getReservationDaysCount() {
    if (!reservationDateRange) return 0;
    return moment(reservationDateRange.endDate).diff(
      moment(reservationDateRange.startDate),
      "days"
    );
  }
  function getTotalPrice() {
    if (!guestsCount) return 0;
    const daysCount = getReservationDaysCount();
    return (
      daysCount * getReducedPrice() * (guestsCount.adult + guestsCount.children)
    );
  }
  function getPrice() {
    return props.itemDetails.price;
  }
  function getReducedPrice() {
    return getPrice() * 0.8;
  }

  return (
    <div className={styles["reserve"]}>
      <Rating />
      <div className="reservation-price">
        <strike>{getPrice()} $</strike>
        <span>{getReducedPrice()} $</span> / night
      </div>
      <DatePicker onChange={reservationDateRangeChangeHandler} />
      <Guests onChange={guestsCountChangeHandler} />
      <div className="reservation">
        <div>
          <div>
            <span>Number of Days : </span>
            <span>{getReservationDaysCount()}</span>
          </div>
          <div>
            <span>Total Price : </span>
            <span>{getTotalPrice()} $</span>
          </div>
        </div>
        <button className="reserve-btn" onClick={reserveHandler}>
          Reserve
        </button>
      </div>
    </div>
  );
}
