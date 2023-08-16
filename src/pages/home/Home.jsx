import React from "react";
import "./home.css";
import { useState } from "react";
import MainForm from "../../components/form/index";

export default function Home() {
  return (
    <div className="home-container">
      <img src="src/images/second.png" alt="" className="home-background" />
      <MainForm />
    </div>
  );
}
