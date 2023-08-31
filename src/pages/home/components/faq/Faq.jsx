import React from "react";
import Accordion from "./components/Accordion";
import "./faq.css";

export default function Faq() {
  return (
    <section className="faq-section" id="faq-section">
      <div className="container">
        <div className="faq">
          <h3>FAQ</h3>
          <div>
            <Accordion
              title="Is simply dummy text of the printing and typesetting industry. Lorem"
              content="We foster a sense of community among its users. It provides user profiles, ratings, and reviews to encourage responsible behavior 
              and positive interactions."
            />
            <Accordion
              title="Is simply dummy text of the printing and typesetting industry. Lorem"
              content="We foster a sense of community among its users. It provides user profiles, ratings, and reviews to encourage responsible behavior 
              and positive interactions."
            />
            <Accordion
              title="Is simply dummy text of the printing and typesetting industry. Lorem"
              content="We foster a sense of community among its users. It provides user profiles, ratings, and reviews to encourage responsible behavior 
              and positive interactions."
            />
            <Accordion
              title="Is simply dummy text of the printing and typesetting industry. Lorem"
              content="We foster a sense of community among its users. It provides user profiles, ratings, and reviews to encourage responsible behavior 
              and positive interactions."
            />
            <Accordion
              title="Is simply dummy text of the printing and typesetting industry. Lorem"
              content="We foster a sense of community among its users. It provides user profiles, ratings, and reviews to encourage responsible behavior 
              and positive interactions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
