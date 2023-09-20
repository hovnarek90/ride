import React, { useState } from "react";
import "./registration-form.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../../../buttons/registrationButtons/RegistrButton";

import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Registration = ({ data, handleChange }) => {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (e) => {
    e.preventDefault();
    if (validation()) {
      navigate("/verify", { state: { phoneNumber: data.phone } });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

  const validation = () => {
    let errors = {};

    const nameRegex =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const passwordRegex = /^(?=.*\d)(?=.*\w)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const phoneRegex =
      /^(\+374|374|0)(10|20|30|40|43|55|77|91|93|94|95|96|98|99)(\d{6}|\d{7})$/;

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
              value={data.phone}
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
