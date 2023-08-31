import React from "react";
import "./home.css";
import MainForm from "../../components/form/index";
import WhyUs from "./components/whyUs/WhyUs";
import Faq from "./components/faq/Faq";

export default function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <MainForm />
      </div>

      <section className="why-us-section">
        <WhyUs />
        <Faq />
      </section>
    </div>
  );
}
