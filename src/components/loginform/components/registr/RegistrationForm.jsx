import React, { useState } from "react";
import "./registration-form.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../../../buttons/registrationButtons/RegistrButton";

const Registration = () => {
<<<<<<< HEAD
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <section className="registration">
        
      <div className="container">
        <div className="general">
          <h2 className="contentName">Register</h2>
          <div className="registr-list">
            <div className="inputLine">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
              />
=======
    const [ visible, setVisible ] = useState(false);
    // const [errors, setErrors] = useState({});
    // const [state, setState] = useState({
    //     fullName: "",
    //     password: "",
    //     phone: ""
    // });

    // const validation = () => {
    //     let errors = {};
    //     const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //     // const phoneRegex = ;
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validation()) {
    //       console.log("Form submitted:", state);
    //     }
    //     setState({
    //       fullName: "",
    //       password: "",
    //       phone: "",
    //     });
    // };

    return (
        <div className="container">
            <div className="general">
                <h2 className="contentName">Register</h2>
                <div className="registr-list">
                    <div className="inputLine">
                        <label htmlFor="fullname">Full name</label>
                        <input
                         type="text" 
                         id="fullname" 
                         placeholder="Enter your full name" 
                        />
                    </div>
                    <div className="inputLine">
                        <label htmlFor="password">Password</label>
                        <input
                         type={visible ? "text" : "password"} 
                         id="password" 
                         placeholder="Enter your password" 
                        />
                        <div className="passIcon" onClick={() => setVisible(!visible)} onChange={(e) => setPassword(e.target.value)}>
                            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </div>
                    </div>
                    <div className="inputLine">
                        <label htmlFor="phone">Phone</label>
                        <input
                         type="tel" 
                         id="phone" 
                         placeholder="+374 xx xx xx" 
                        />
                    </div>
                    <Button
                        text="Register"
                        className="inputButton"
                    />
                    <div className="hrwithtext">
                        <hr />
                        <p className="textinsidehr">Or continue with</p>
                    </div>
                    <Button
                        text="Google"
                        className="googleButton"
                    />
                    <Button
                        text="Facebook"
                        className="fbButton"
                    />
                </div>
                <p className="finishLine">
                    Already have an account? <a className="logining" href="http://localhost:5173/login">Login</a>
                </p>
>>>>>>> 4dcb48ecb166def4e79bc656e4d3e7860b80ea9d
            </div>
            <div className="inputLine">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type={visible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter your password"
              />
              <div className="passIcon" onClick={() => setVisible(!visible)}>
                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
            <div className="inputLine">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="+374 xx xx xx" />
            </div>
            <Button text="Register" className="inputButton" />
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
    </section>
  );
};

export default Registration;
