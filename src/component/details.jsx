import React from "react";

const Details = ({ number, message, onNumberChange, onMessageChange }) => {
  return (
    <>
      <p>Enter your whatsapp number below</p>
      <input
        style={{ height: "30px", width: "100%" }}
        placeholder="e.g 2349036058937 not 09036058937"
        value={number}
        onInput={(e) => onNumberChange(e.target.value)}
        onChange={(e) => onNumberChange(e.target.value)}
      ></input>

      <p>Do you want to add any predefined message?</p>
      <textarea
        style={{ width: "100%" }}
        rows="5"
        columns="50"
        placeholder="Leave empty if you do not need a predefined message"
        value={message}
        onInput={(e) => onMessageChange(e.target.value)}
        onChange={(e) => onMessageChange(e.target.value)}
      ></textarea>
    </>
  );
};

export default Details;
