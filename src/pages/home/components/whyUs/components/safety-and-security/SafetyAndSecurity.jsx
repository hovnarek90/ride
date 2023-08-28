import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import "./safety-and-security.css";
export default function SafetyAndSecurity() {
  return (
    <div className="security-container">
      <div className="icon">
        <FontAwesomeIcon icon={faShieldHalved} />{" "}
      </div>
      <h2>Safety and Security</h2>
      <p>
        Safety is a top priority for us. The platform implements stringent
        safety measures such as driver verification, background checks, and user
        ratings.{" "}
      </p>
    </div>
  );
}
