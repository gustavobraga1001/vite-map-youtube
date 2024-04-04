import React from "react";
import './index.css'

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input">
        <label>{label}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
        />
    </div>
  );
};

export default Input;