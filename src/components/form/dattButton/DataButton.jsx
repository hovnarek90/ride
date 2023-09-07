import React, { useState, useRef } from "react";
import "./data-button.css";

export default function DataButton() {
  const [isDateInputOpen, setIsDateInputOpen] = useState(false);
  const dateInputRef = useRef(null);

  const toggleDateInput = () => {
    setIsDateInputOpen(!isDateInputOpen);

    if (!isDateInputOpen) {
      // Programmatically focus the date input to open it
      dateInputRef.current.focus();
    }
  };

  return (
    <>
      <div className="custom-date-input">
        <input
          type="date"
          name=""
          id="myDateInput"
          ref={dateInputRef}
          onBlur={() => setIsDateInputOpen(false)}
          style={{ display: isDateInputOpen ? "block" : "none" }}
        />
        <span
          className="custom-date-text"
          onClick={toggleDateInput}
          tabIndex={0} // Allow span element to be focused
        >
          Select a date
        </span>
      </div>
    </>
  );
}
