import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faLocationDot,
  faRepeat,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";
import "./main-form.css";
import DatePickerComponent from "./calendar/DatePickerComponent.jsx";

export default function MainForm() {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const swapFromAndTo = (e) => {
    e.preventDefault();
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
  };

  return (
    <>
      <form action="">
        <div className="input-container-form">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <input 
            type="text"
            placeholder="From"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)} 
          />
        </div>
        <div className="button-repeat">
          <button type="submit" onClick={swapFromAndTo}>
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        </div>
        <div className="input-container-form">
          <span className="icon">
            <FontAwesomeIcon icon={faFlag} />
          </span>
          <input
            type="text"
            placeholder="To"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
          />
        </div>

        <div className="data">
          {/* <div className="input-data">
            <input type="date" name="" id="" />
          </div> */}
          {/* <DataButton /> */}
          <DatePickerComponent />

          <div className="passengers">
            {" "}
            <FontAwesomeIcon icon={faUserGroup} />
            Passenger
            <div className="list-passenger"></div>
          </div>
        </div>
        <div className="offer-buttons">
          {/* <Button type="green"> Offer a ride</Button> */}
          <Button type="blue"> Finde a ride</Button>
        </div>
      </form>
    </>
  );
}
