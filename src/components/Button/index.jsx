import React from "react";
import './index.css'

const Button = ({ text, onClick, classe = '', type}) => {
  return (  
    <button className={classe} onClick={onClick}>{text}</button>
  );
};

export default Button;