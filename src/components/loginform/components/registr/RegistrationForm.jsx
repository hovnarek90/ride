import React from "react";
import "./registration-form.css";
import Button from "../../../buttons/registrationButtons/RegistrButton";

const Registration = () => { 
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
                         type="password" 
                         id="password" 
                         placeholder="Enter your password" 
                        />
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
            </div>
        </div>
    );
}

export default Registration;