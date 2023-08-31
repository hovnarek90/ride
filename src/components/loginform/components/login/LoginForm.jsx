import React, { useState } from "react";
import "./login-form.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../../../buttons/registrationButtons/RegistrButton";

const Login = () => {
    const [ password, setPassword ] = useState("");
    const [ visible, setVisible ] = useState(false);

    return (
        <>
            <div className="container">
                <div className="general">
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