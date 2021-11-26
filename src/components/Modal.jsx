import styles from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles["backdrop"]} onClick={props.onCancel}>
      <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>

         {/* this is tp stop click propagation to the native dcument*/}
        <h2>{props.title}</h2>
        {props.children}
        <div className={styles["actions"]}>
          <button
            className={[styles["button-primary"], styles["button"]].join(" ")}
            onClick={props.onConfirm}
          >
            Confirm
          </button>
          <button
            className={[styles["button-secondary"], styles["button"]].join(" ")}
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
