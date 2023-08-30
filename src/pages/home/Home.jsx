import React from "react";
import "./home.css";
import { useState } from "react";
import MainForm from "../../components/form/index";
import WhyUs from "./components/whyUs/WhyUs";

export default function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <img src="src/images/second.png" alt="" className="home-background" />

        <MainForm />
      </div>
      <section className="why-us-section">
        <WhyUs />
      </section>
    </div>
  );
}
