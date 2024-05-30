// src/FloatingLabelInput.js
import React, { useState } from "react";
import "./FloatingLabelInput.css";

const FloatingLabelInput = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
}) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = (event) => {
    setFocused(value !== "" ? true : false);
    if (onBlur) onBlur(event);
  };
  return (
    <>
      <div>
        <div className="floating-label-input">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
          />
          {label && (
            <label className={focused || value ? "focused" : ""}>{label}</label>
          )}
        </div>
        {error ? <span className="error-message">{errorMessage}</span> : null}
      </div>
    </>
  );
};

export default FloatingLabelInput;
