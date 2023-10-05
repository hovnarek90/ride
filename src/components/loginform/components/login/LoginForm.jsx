import React, { useState } from "react";
import "./login-form.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Button from "../../../buttons/registrationButtons/RegistrButton";
import { useNavigate } from "react-router-dom";
import userData from "../../../../user.json";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [logErr, setLogErr] = useState({});
  const navigate = useNavigate();
  const [logData, setLogData] = useState({
    logEmail: "",
    logPass: "",
  });
  const [user, setUser] = useState(null);

  const handleLogClick = async (e) => {
    e.preventDefault();
    if (await logValid()) {
      navigate("/user");
      handleLogClean();
    }
  };

  const handleLogChange = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  const logValid = async () => {
    let logErr = {};

    try {
      const response = await fetch("127.0.0.1:3008/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ logEmail: logData.logEmail, logPass: logData.logPass }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      } else {
        const errorData = await response.json();
        logErr.glob = errorData.error;
      }
    } catch (error) {
      console.log("Error logging in:", error);
      logErr.glob = "Failed to log in";
    }

    handleLogClean();
    setLogErr(logErr);
    return Object.keys(logErr).length === 0;
  };

  const handleLogClean = () => {
    setLogData({
      logEmail: "",
      logPass: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="general">
          <h2 className="contentName">Log In</h2>
          <div className="login-list">
            <div className="inputLine">
              <label htmlFor="email">Email or phone number</label>
              <input
                name="logEmail"
                type="text"
                id="email"
                placeholder="Enter your email or phone number"
                value={logData.logEmail}
                onChange={handleLogChange}
              />
            </div>
            <div className="inputLine">
              <label htmlFor="password">Password</label>
              <input
                name="logPass"
                type={visible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={logData.logPass}
                onChange={handleLogChange}
              />
              <div
                className="loginIcon"
                onClick={() => setVisible(!visible)}
                onChange={(e) => setPassword(e.target.value)}
              >
                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
              <a className="forgotPass" href="http://localhost:5173/register">
                Forgot password?
              </a>
            </div>
            <br />
            <div style={{ color: "red" }}> {logErr.glob}</div>
            <br />
            {user && <div>Status: {user.status}</div>}
            <Button
              text="Login"
              className="inputButton"
              onClick={handleLogClick}
            />
            <div className="hrwithtext">
              <hr />
              <p className="textinsidehr">Or continue with</p>
            </div>
            <Button text="Google" className="googleButton" />
            <Button text="Facebook" className="fbButton" />
          </div>
          <p className="finishLine">
            Don't have an account?{" "}
            <a href="http://localhost:5173/register">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
