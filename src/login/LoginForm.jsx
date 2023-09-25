import React, { useState } from "react";
import "./login-form.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../components/buttons/Button";

const Login = () => {
    const [ visible, setVisible ] = useState(false);

    return (
        <>
            <div className="container">
                <div className="general">
                    <h2 className="contentName">Log In</h2>
                    <div className="login-list">
                        <div className="inputLine">
                            <label htmlFor="email">Email or phone number</label>
                            <input
                            type="text" 
                            id="email" 
                            placeholder="Enter your email or phone number" 
                            />
                        </div>
                        <div className="inputLine">
                            <label htmlFor="password">Password</label>
                            <input
                             type={visible ? "text" : "password"} 
                             id="password" 
                             placeholder="Enter your password" 
                            />
                            <div className="loginIcon" onClick={() => setVisible(!visible)} onChange={(e) => setPassword(e.target.value)}>
                                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </div>
                            <a className="forgotPass" href="http://localhost:5173/reg">Forgot password?</a>
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
            </div>
        </>
    );
}

export default Login;