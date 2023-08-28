import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./community-building.css";
export default function CommunityBuilding() {
  return (
    <div className="community-building">
      {" "}
      <div className="icon">
        <FontAwesomeIcon icon={faComments} />{" "}
      </div>
      <h2>Community Building</h2>
      <p>
        We foster a sense of community among its users. It provides user
        profiles, ratings, and reviews to encourage responsible behavior and
        positive interactions.
      </p>
    </div>
  );
}
