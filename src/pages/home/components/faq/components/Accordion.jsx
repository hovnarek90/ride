import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h4>{title}</h4>
        <span>
          {isOpen ? (
            <FontAwesomeIcon className="open" icon={faArrowRight} />
          ) : (
            <FontAwesomeIcon className="close" icon={faArrowRight} />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {Array.isArray(content) ? (
            content.map((section, index) => <p key={index}>{section}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
