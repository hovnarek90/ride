import React, { useState, useEffect } from "react";
import Button from "../../../buttons/registrationButtons/RegistrButton";
import "./verify.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Verification = () => {
  const [counter, setCounter] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [verifyNum, setVerifyNum] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  const handleBack = () => {
    navigate("/register");
  };

  const handleVerifyChanges = (e) => {
    const { name, value } = e.target;
    setVerifyNum({ ...verifyNum, [name]: value });
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (verification()) {
      navigate("/home");
    }
  };
  const verification = () => {
    if (
      verifyNum.num1 == 2 &&
      verifyNum.num2 == 2 &&
      verifyNum.num3 == 2 &&
      verifyNum.num4 == 2
    ) {
      return true;
    }
    return false;
  };

  const handleResendClick = () => {
    if (!isTimerRunning) {
      setCounter(60);
      setIsTimerRunning(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerRunning && counter > 0) {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        clearInterval(interval);
        setIsTimerRunning(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, isTimerRunning]);

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
            <p>
              +374{" "}
              {phoneNumber
                ? `${phoneNumber.slice(4, 6)} ${phoneNumber.slice(6, 9)}`
                : ""}{" "}
              xxx
            </p>
          </div>
          <div className="verifyNums">
            <input
              type="text"
              id="num1"
              name="num1"
              value={verifyNum.num1}
              onChange={handleVerifyChanges}
              maxLength={1}
              placeholder="0"
            />
            <input
              type="text"
              id="num2"
              name="num2"
              value={verifyNum.num2}
              onChange={handleVerifyChanges}
              maxLength={1}
              placeholder="0"
            />
            <input
              type="text"
              id="num3"
              name="num3"
              value={verifyNum.num3}
              onChange={handleVerifyChanges}
              maxLength={1}
              placeholder="0"
            />
            <input
              type="text"
              id="num4"
              name="num4"
              value={verifyNum.num4}
              onChange={handleVerifyChanges}
              maxLength={1}
              placeholder="0"
            />
          </div>
          <div className="verifyTimer">
            <p>Code send </p>
            <p className="timerContent">
              {isTimerRunning ? (
                `resend in 0${minutes}:${
                  remainingSeconds < 10
                    ? `0${remainingSeconds}`
                    : remainingSeconds
                }`
              ) : (
                <p className="resendTimer" onClick={handleResendClick}>
                  Click to resend
                </p>
              )}
            </p>
          </div>
          <div className="buttons">
            <Button
              text="Back"
              className="verifyBackBtn"
              onClick={handleBack}
            />
            <button disabled={!verification()} onClick={handleVerify} className={`verifyBtn${verification() ? "active" : "faded"}`}>Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
