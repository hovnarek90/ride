import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";

const Accordion = ({ title,  content }) => {
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
      {isOpen && <p className="accordion-content">{content}</p>}
    </div>
  );
};

export default Accordion;
