import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./componetns/hamburger/HamburgerMenu";
import "./header.css";
export default function Header({ isOpen, setIsOpen }) {
  return (
    <header>
      <div className="container">

        <div className="content">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>

          <div className="hamburger">
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}
