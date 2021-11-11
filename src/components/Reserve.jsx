import Rating from "./Rating";
import styles from "./Reserve.module.css";
import DatePicker from "./DatePickerComponent";

export default function Reserve() {
  return (
    <div className={styles["reserve"]}>
      <Rating />
      <span className="reservation-price">
        <strike>354 zł</strike>
        <span>248 zł</span> / night
      </span>
      <DatePicker />
    </div>
  );
}
