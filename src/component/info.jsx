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
          You might be prompted to add this site to your Home Screen, ACCEPT and
          you will be able to use it as a Mobile/Desktop App{" "}
          <span role="img" aria-label="thumbs_up">
            👍
          </span>
        </p>
        <p>
          This is a tool to quickly generate a personalized WhatsApp link with a
          predefined message and share it with your audience on Social Media
        </p>
        <p>
          With the generated link, your customers and friends can send you
          Whatsapp messages from anywhere on the internet without having to add
          your number to their contact list
        </p>
        <p
          style={
            {
              /*textAlign: "center"*/
            }
          }
        >
          Then you can send broadcast that include message like "Reach me on
          Whatsapp with
          <a href="https://wa.me/2349036058937"> wa.me/2349036058937</a> for
          more enquiry"
        </p>
        <p
          style={
            {
              /*textAlign: "center"*/
            }
          }
        >
          Or with prewritten message such as {""}
          <a href="http://rebrand.ly/r4r11cu">rebrand.ly/r4r11cu</a>
        </p>
      </section>
    </>
  );
};

export default Info;
