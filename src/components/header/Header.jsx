import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../hamburger/HamburgerMenu";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="heder">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="hamburger">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
