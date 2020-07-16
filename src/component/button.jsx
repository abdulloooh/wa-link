import React from "react";
import "../App.css";

const ClickToCopy = ({ handleClick }) => {
  return (
    <input
      style={{ height: "30px" }}
      type="button"
      value="Generate Link"
      onClick={handleClick}
    />
  );
};

export default ClickToCopy;
