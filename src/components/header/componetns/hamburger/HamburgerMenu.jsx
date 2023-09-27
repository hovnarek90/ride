import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./hamburgerMenu.css";

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div
        className="hamburger-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="menu-items">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="register">Registration</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
