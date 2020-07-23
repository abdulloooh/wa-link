import React from "react";

const Info = () => {
  return (
    <>
      <section>
        <p style={{ textAlign: "center" }}>
          Hey there{" "}
          <span role="img" aria-label="waving-hand-emoji">
            👋
          </span>
        </p>
        <p className="install" style={{ color: "lightgreen" }}>
          You will be prompted to add this site to your Home Screen, ACCEPT and
          you will be able to use it as a Mobile/Desktop App 👍.
        </p>
        <p>
          This is a tool to quickly generate a personalized WhatssApp link with
          a predefined message and share it with your audience on Social Media
        </p>
        <p>
          With the generated link, your customers and friends can send you
          Whatsapp messages from anywhere on the internet without having to add
          your number to their contact list
        </p>
        <p style={{ textAlign: "center" }}>
          Then you can send broadcast that include message like <br /> "Reach me
          on <a href="https://wa.me/2349036058937"> wa.me/2349036058937</a> for
          more enquiry"
        </p>
        <p style={{ textAlign: "center" }}>
          Or with prewritten message such as
          <br />
          <a href="https://bit.ly/3jvhbaK">https://bit.ly/3jvhbaK</a>
        </p>
      </section>
    </>
  );
};

export default Info;
