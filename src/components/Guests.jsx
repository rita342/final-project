import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Guests(props) {
  const [guestsCount, setGuestCount] = useState({
    infant: 0,
    children: 0,
    adult: 0,
  });
  function guestCountChangeHandler(guestType, num) {
    const newGuestsCount = {
      ...guestsCount,
      [guestType]: guestsCount[guestType] + num,
    };
    setGuestCount(newGuestsCount);
    props.onChange(newGuestsCount);
  }
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          className="dropdown-basic"
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
            <span style={{ fontSize: "13px" }}>
              {" "}
              {guestsCount.infant} Infants
            </span>{" "}
            <span style={{ fontSize: "13px" }}>
              {" "}
              {guestsCount.children} Children{" "}
            </span>
            <span style={{ fontSize: "13px" }}>
              {" "}
              {guestsCount.adult} Adults
            </span>
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
                onClick={() => guestCountChangeHandler("infant", -1)}
              />{" "}
              {guestsCount.infant}{" "}
              <BsPlusCircle
                onClick={() => guestCountChangeHandler("infant", 1)}
              />
            </li>
            <br />
            <li>
              <AiOutlineMinusCircle
                onClick={() => guestCountChangeHandler("children", -1)}
              />{" "}
              {guestsCount.children}{" "}
              <BsPlusCircle
                onClick={() => guestCountChangeHandler("children", 1)}
              />
            </li>
            <br />
            <li>
              <AiOutlineMinusCircle
                onClick={() => guestCountChangeHandler("adult", -1)}
              />{" "}
              {guestsCount.adult}{" "}
              <BsPlusCircle
                onClick={() => guestCountChangeHandler("adult", 1)}
              />
            </li>
            <br />
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
export default Guests;
