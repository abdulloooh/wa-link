import React from "react";
import CustomButton from "../component/common/button";
import "../footer.css";

const Details = ({
  number,
  message,
  onNumberChange,
  onMessageChange,
  generateLink,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      <p>Enter your whatsapp number below</p>
      <input
        onFocus={() => onFocus()}
        type="tel"
        style={{ height: "30px", width: "100%" }}
        placeholder="with country code eg 234 for Nigeria, 2349036058937"
        value={number}
        onInput={(e) => onNumberChange(e.target.value)}
        onChange={(e) => onNumberChange(e.target.value)}
      ></input>
      <p>Add your predefined message</p>
      <textarea
        onFocus={() => onFocus()}
        style={{ width: "100%" }}
        rows="5"
        columns="50"
        placeholder="Leave empty if you do not need a predefined message"
        value={message}
        onInput={(e) => onMessageChange(e.target.value)}
        onChange={(e) => onMessageChange(e.target.value)}
      ></textarea>
      <br /> <br />
      <CustomButton handleClick={generateLink} value="Generate Link" />
    </>
  );
};

export default Details;
