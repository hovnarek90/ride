import React from "react";
import "./login-form.css";
import Button from "../../../buttons/registrationButtons/RegistrButton";

const Login = () => {
    return (
        <>
            <div className="container">
                <h2 className="contentName">Log In</h2>
                <div className="login-list">
                    <div className="inputLine">
                        <label htmlFor="email">Email</label>
                        <input
                         type="email" 
                         id="email" 
                         placeholder="Enter your email" 
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
                    <Button
                        text="Login"
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
                    Don't have an account? <a href="http://localhost:5173/reg">Register</a>
                </p>
            </div>
        </>
    );
}

export default Login;