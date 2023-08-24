import React from "react";
import "./registration-form.css";

const Registration = () => { 

    return (
        <>
            <div className="container">
                <h2>Register</h2>
                <div className="registr-list">
                    <div className="inputLine">
                        <label>Full name</label>
                        <input
                         type="text" 
                         id="fullname" 
                         placeholder="Enter your full name" 
                        />
                    </div>
                    <div className="inputLine">
                        <label>Password</label>
                        <input
                         type="password" 
                         id="password" 
                         placeholder="Enter your password" 
                        />
                    </div>
                    <div className="inputLine">
                        <label>Phone</label>
                        <input
                         type="tel" 
                         id="phone" 
                         placeholder="+374 XX XX XX" 
                        />
                    </div>
                    <div className="inputButton">
                        <input type="submit" value="Register"/>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Registration;