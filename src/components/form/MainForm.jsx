import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faLocationDot,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import "./main-form.css";

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
        <div className="button">
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
      </form>
    </>
  );
}