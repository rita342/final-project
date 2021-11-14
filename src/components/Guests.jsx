import { Button, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { BsPeopleFill, BsPatchMinusFill, BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Guests() {
  const [countInfant, setCountInfant] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countAdult, setCountAdult] = useState(0);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{
            background: "white",
            border: "1px solid #bdbdbd",
            width: "285px",

            marginTop: "-10px",
            color: "black",
          }}
        >
          <div style={{ float: "left" }}>
            <div style={{ fontSize: "14px" }}>GUESTS</div>
            <span style={{ fontSize: "13px" }}> {countAdult}infants</span>{" "}
            <span style={{ fontSize: "13px" }}> {countChildren}Children </span>
            <span style={{ fontSize: "13px" }}> {countInfant}Adults</span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "280px" }}>
          <div style={{ float: "left", padding: "10px" }}>
            <li> Adults</li>
            <br />
            <li>Children</li>
            <br />
            <li>Infants</li>
            <br />
          </div>
          <div style={{ float: "right", padding: "10px" }}>
            <li>
              <AiOutlineMinusCircle
                onClick={() => setCountInfant(countInfant - 1)}
              />{" "}
              {countInfant}{" "}
              <BsPlusCircle onClick={() => setCountInfant(countInfant + 1)} />
            </li>
            <br />
            <li>
              <AiOutlineMinusCircle
                onClick={() => setCountChildren(countChildren - 1)}
              />{" "}
              {countChildren}{" "}
              <BsPlusCircle
                onClick={() => setCountChildren(countChildren + 1)}
              />
            </li>
            <br />
            <li>
              <AiOutlineMinusCircle
                onClick={() => setCountAdult(countAdult - 1)}
              />{" "}
              {countAdult}{" "}
              <BsPlusCircle onClick={() => setCountAdult(countAdult + 1)} />
            </li>
            <br />
          </div>
        </Dropdown.Menu>
      </Dropdown>

      <button
        style={{
          marginTop: "2rem",
          width: "285px",
          height: "3rem",
          color: "white",
          background: "#E6007E",
          border: "1px solid #bdbdbd",
          borderRadius: "10px",
        }}
      >
        Reserve
      </button>
    </>
  );
}
export default Guests;
