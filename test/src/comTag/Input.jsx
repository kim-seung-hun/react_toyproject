import React from "react";

const Input = ({ inputTxt }) => {
  return (
    <div className="logInput">
      <input placeholder={inputTxt} />
    </div>
  );
};

export default Input;
