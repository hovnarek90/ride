import React from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a request to the server to log the user out
      const response = await fetch("http://127.0.0.1:3008/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the JWT token
        },
      });

      if (response.ok) {
        // User logged out successfully
        localStorage.removeItem("token"); // Remove the JWT token from localStorage
        navigate("/login"); // Redirect to the login page or any other desired page
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <h1>I am User</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccount;
