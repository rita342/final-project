import React from "react";
import CardComponent from "./CardComponent";
import MediumCard from "./MediumCard";
import { useState, useEffect } from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addSearchTermAction, GET_SEARCH_TERM } from "../redux/actions";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearchTermAction(searchTerm));
  }, [searchTerm]);

  return (
    <>
      <div
        className="cover"
        style={{
          position: "relative",
        }}
      >
        <img
          src="https://www.bejot.eu/assets/photo/upload/content/gallery/709/xkorzen-design-paris-1-smart-1920-1080.jpeg.pagespeed.ic.dcgeKjwrup.jpg"
          layout="fill"
          objectFit="cover"
          style={{
            backgroundRepeat: "no-repeat",
            width: "100%",
            borderBottomLeftRadius: "100% 100% ",
            borderBottomRightRadius: "100% 100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "3",
            background: "rgb(30 32 36 / 50%)",
            borderBottomLeftRadius: "100% 100% ",
            borderBottomRightRadius: "100% 100%",
          }}
        >
          <div
            classNme="where-you-move"
            style={{
              position: "absolute",
              top: "13%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",

              color: "white",
            }}
          >
            <h1 style={{ color: "white" }}>
              <span className="span"></span>
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "25%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                marginTop: "5rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <form class="example" action="action_page.php">
                <input
                  type="text"
                  placeholder="Search your Country..."
                  name="search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  style={{
                    borderRadius: "23px",
                    border: "1px solid white",
                    padding: "9px ",
                    width: "20rem",
                  }}
                />
                <Link to="/Menu/">
                  <Button
                    type="submit"
                    style={{
                      borderRadius: "40px",
                      background: "#ff1493",
                      marginLeft: "-11%",
                      border: "1px solid #ff1493",
                    }}
                  >
                    <FiSearch
                      style={{
                        color: "white",
                      }}
                    />
                  </Button>
                </Link>
              </form>
            </div>
            <div
              style={{
                position: "absolute",
                marginTop: "20rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                fontSize: "6rem",
                color: "Plum",
              }}
            >
              {" "}
              <BsFillHouseFill />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CardComponent />
      </div>
      <div>
        <MediumCard />
      </div>
    </>
  );
}
