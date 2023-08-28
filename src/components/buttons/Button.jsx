import React from 'react';
import './Button.css';

const Button = ({ type, children }) => {
  const buttonClass = `btn ${type}`;
  
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;