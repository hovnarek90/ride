import React, { useState, useEffect } from "react";
import Button from "../../../buttons/registrationButtons/RegistrButton";
import "./verify.css";
import { useLocation } from "react-router-dom"; 

const Verification = ({ first, second }) => {
  const [counter, setCounter] = useState(60);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  const minutes = Math.floor(counter / 60);
  const remainingSeconds = counter % 60;

  const phoneNumber = location.state?.phoneNumber;

  return (
    <div className="container">
      <div className="general">
        <div className="verifyContent">
          <h2>Verification</h2>
          <div className="phonNum">
            <p>Please enter the 4 digit code sent to</p>
            <p>+374 {phoneNumber ? phoneNumber : ""}</p>
          </div>
          <div className="verifyNums">
            <input type="text" maxLength={1} placeholder="0" />
            <input type="text" maxLength={1} placeholder="0" />
            <input type="text" maxLength={1} placeholder="0" />
            <input type="text" maxLength={1} placeholder="0" />
          </div>
          <div className="verifyTimer">
            <p>Code send </p>
            <p className="timerContent">
              resend in {`0${minutes}`}:
              {remainingSeconds < 10
                ? `0${remainingSeconds}`
                : remainingSeconds}
            </p>
          </div>
          <div className="buttons">
            <Button text="Back" className="verifyBackBtn" />
            <Button text="Verify" className="verifyBtn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
