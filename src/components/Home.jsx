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
          src="https://treehousevineyards.com/images/hero/homeHero.jpg?nf_resize=fit&w=1440"
          layout="fill"
          objectFit="cover"
          style={{
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
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

            // "linear-gradient(0deg, #f3ec78, #af4261)",
            background:
              "linear-gradient( 2deg, rgb(0 0 0 / 0%), rgb(6 6 6 / 74%))",
            //  background: "rgb(10 32 6 / 20%)",
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
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Search your Country..."
                  name="search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontSize: "20px",
                    boxSizing: "border-box",
                    transition: ".5s",
                    width: "340px",
                    background: "#fff",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    padding: "0 25px",
                    borderRadius: "25px 0 0 25px",
                  }}
                />
                {/* `search/?country${countryVariable}&city=${cityVariable}` or "search/?country=" + countryVariable + "&city=" + cityVariable*/}
                <Link to={`/Search/?country=${searchTerm}`}>
                  <input
                    type="submit"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      fontSize: "20px",
                      boxSizing: "border-box",
                      transition: ".5s",
                      borderRadius: "0 25px 25px 0",
                      width: "150px",
                      height: "50px",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                      background: "#985321",
                      color: "#fff",
                      left: "-5px",
                    }}
                  />
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
                color: "linear-gradient(to bottom right,pink, purple)",
              }}
            >
              {" "}
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
