import "./data-picker.css";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(true); // Set calendarOpen to true initially

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false); // Close the calendar when a date is selected
  };

  return (
    <div className="date-picker-container">
      <div className="date-picker" onClick={toggleCalendar}>
        <FontAwesomeIcon icon={faCalendarDays} />
        {selectedDate ? selectedDate.toDateString() : "Select a Date"}
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        open={!calendarOpen} // Specify the open prop to control the calendar's visibility
      />
    </div>
  );
};

export default DatePickerComponent;
