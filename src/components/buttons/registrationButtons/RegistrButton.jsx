import React from "react";
import "./registrButton.css";

const Button = ({ text, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {text} 
        </button>
    );
}

export default Button;