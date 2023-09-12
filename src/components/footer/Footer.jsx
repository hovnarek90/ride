import React from "react";
import "./footer.css";
import {
  GooglePlayButton,
  ButtonsContainer,
  AppStoreButton,
} from "react-mobile-app-button";
import Accordion from "../../pages/home/components/faq/components/Accordion";

export default function Footer() {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=host.exp.exponent";
  const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  const accordionItems = [
    {
      title: "Directories",
      content: [
        "All carpool roots.",
        "All carpool destinations.",
        "All bus rootes.",
        "All bus destinations.",
      ],
    },
    {
      title: "About",
      content: ["How it works.", "About us.", "FAQ"],
    },
  ];

  return (
    <footer>
      <div className="container">
        <a href="">logo</a>{" "}
        <div>
          {accordionItems.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <ButtonsContainer className="buttons-container">
          <AppStoreButton
            url={iOSUrl}
            theme={"dark"}
            className={"btn-style"}
            width={"45%"}
          />
          <GooglePlayButton
            url={APKUrl}
            theme={"dark"}
            className={"btn-style"}
            width={"45%"}
          />
        </ButtonsContainer>
        <div className="footer-description">
          <p>Terms</p>
          <p>Privacy Policy</p>
          <span>Ⓒ 2023 Teiapp</span>
        </div>
      </div>
    </footer>
  );
}
