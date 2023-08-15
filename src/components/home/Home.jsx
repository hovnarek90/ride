import React from "react";
import "./home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faLocationDot,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [geolocation, setGeolocation] = useState("");
  const [flagImage, setFlagImage] = useState("");

  const handleGeolocationChange = (event) => {
    setGeolocation(event.target.value);
  };

  const handleFlagImageChange = (event) => {
    setFlagImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submission logic here
  };
  return (
    <div className="home-container">
      <img src="src/images/second.png" alt="" className="home-background" />
      <form action="">
        <div className="input-container">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <input
            type="text"
            placeholder="From"
            value={geolocation}
            onChange={handleGeolocationChange}
          />
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
          <input
            type="text"
            placeholder="To"
            value={flagImage}
            onChange={handleFlagImageChange}
          />
        </div>
      </form>
    </div>
  );
}
