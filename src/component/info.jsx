import React from "react";

const Info = () => {
  return (
    <section>
      <p>
        Hey there{" "}
        <span role="img" aria-label="waving-hand-emoji">
          👋
        </span>
      </p>
      <p>
        Do you always need to share your friend's advert or yours on whatsapp
        and you need to provide them with a direct clickable link to chat you up
        but find it difficult or stressful to do always?
      </p>
      <p>
        Something like
        <br /> "DM me with {""}
        <a href="https://wa.me/2349036058937"> wa.me/2349036058937</a> for more
        enquiry"
      </p>
      <p>
        Or do you even want a prewritten message embedded for your customers to
        chat you up from your advert? Like{" "}
        <a href="https://api.whatsapp.com/send?phone=2349036058937&text=Hi%20Laplace%2C%20I%20saw%20your%20advert%20and%20I%20want%20to%20buy%20the%20data%20at%20%23350%2Fgb">
          this (click to try it out)
        </a>{" "}
      </p>
    </section>
  );
};

export default Info;
