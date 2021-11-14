import Rating from "./Rating";
import styles from "./Reserve.module.css";
import DatePicker from "./DatePickerComponent";
import Guests from "./Guests";

export default function Reserve() {
  return (
    <div className={styles["reserve"]}>
      <Rating />
      <span className="reservation-price">
        <strike>354 zł</strike>
        <span>248 zł</span> / night
      </span>
      <DatePicker />
      <span className="reservation">
        <Guests />
        <span></span>
      </span>
    </div>
  );
}
