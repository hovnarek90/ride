import React, { useState } from "react";
import "./registration-form.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../../../buttons/registrationButtons/RegistrButton";
import { useNavigate } from "react-router-dom";

const Registration = ({ data, handleChange, handleClean }) => {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await fetch("http://127.0.0.1:3008/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);

          navigate("/verify", { state: { phoneNumber: data.phone, token: responseData.user.token } });

          handleClean();
        } else {
          console.log("Registration failed:", response.statusText);
        }
      } catch (error) {
        console.error("Registration failed:", error);
      }
    }
  };
  

  const validation = () => {
    let errors = {};

    const nameRegex =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const passwordRegex = /^(?=.*\d)(?=.*\w)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const phoneRegex = /^(\+374|374|0)([1-9]\d{7})$/;

    if (!data.fullName.match(nameRegex)) {
      errors.fullName = "Error Name";
    }

    if (!data.password.match(passwordRegex)) {
      errors.password = "Error Password";
    }

    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Error Phone";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="container">
      <div className="general">
        <h2 className="contentName">Register</h2>
        <div className="registr-list">
          <div className="inputLine">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={handleChange}
            />
            <br />
            <div style={{ color: "red" }}> {errors.fullName}</div>
          </div>
          <div className="inputLine">
            <label htmlFor="password">Password</label>
            <input
              type={visible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />
            <div
              className="passIcon"
              onClick={() => setVisible(!visible)}
              onChange={(e) => setPassword(e.target.value)}
            >
              {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
            <br />
            <div style={{ color: "red" }}> {errors.password}</div>
          </div>
          <div className="inputLine">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+374 xx xx xx"
              value={data.phone || "+374"}
              onChange={handleChange}
            />
            <br />
            <div style={{ color: "red" }}> {errors.phone}</div>
          </div>
          <Button
            text="Register"
            onClick={handleClick}
            className="inputButton"
          />
          <div className="hrwithtext">
            <hr />
            <p className="textinsidehr">Or continue with</p>
          </div>
          <Button text="Google" className="googleButton" />
          <Button text="Facebook" className="fbButton" />
        </div>
        <p className="finishLine">
          Already have an account?{" "}
          <a className="logining" href="http://localhost:5173/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
