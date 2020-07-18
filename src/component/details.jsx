import React from "react";
import Button from "../component/common/button";

const Details = ({
  number,
  message,
  onNumberChange,
  onMessageChange,
  generateLink,
}) => {
  return (
    <>
      <p>Enter your whatsapp number below</p>
      <input
        type="tel"
        style={{ height: "30px", width: "100%" }}
        placeholder="e.g 2349036058937 not 09036058937"
        value={number}
        onInput={(e) => onNumberChange(e.target.value)}
        onChange={(e) => onNumberChange(e.target.value)}
      ></input>
      <p>Add your predefined message</p>
      <textarea
        style={{ width: "100%" }}
        rows="5"
        columns="50"
        placeholder="Leave empty if you do not need a predefined message"
        value={message}
        onInput={(e) => onMessageChange(e.target.value)}
        onChange={(e) => onMessageChange(e.target.value)}
      ></textarea>
      <br /> <br />
      <Button handleClick={generateLink} value="Generate Link" />
    </>
  );
};

export default Details;
