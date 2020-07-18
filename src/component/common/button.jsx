import React from "react";
import "../../App.css";

const Button = ({ handleClick, value }) => {
  return (
    <input
      style={{ height: "30px", marginLeft: "20px", width: "200px" }}
      type="button"
      value={value}
      onClick={handleClick}
    />
  );
};

export default Button;
