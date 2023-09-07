import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faLocationDot,
  faRepeat,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";
import "./main-form.css";
import DataButton from "./dattButton/dataButton";

export default function MainForm() {
  return (
    <>
      <form action="">
        <div className="input-container">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <input type="text" placeholder="From" />
        </div>
        <div className="button-repeat">
          <button type="submit">
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        </div>
        <div className="input-container">
          <span className="icon">
            <FontAwesomeIcon icon={faFlag} />
          </span>
          <input type="text" placeholder="To" />
        </div>

        <div className="data">
          {/* <div className="input-data">
            <input type="date" name="" id="" />
          </div> */}

          <DataButton />

          <div className="passengers">
            {" "}
            <FontAwesomeIcon icon={faUserGroup} />
            Passenger
            <div className="list-passenger"></div>
          </div>
        </div>
        <div className="offer-buttons">
          <Button type="green"> Offer a ride</Button>
          <Button type="blue"> Finde a ride</Button>
        </div>
      </form>
    </>
  );
}
