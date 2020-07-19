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
        Do you want to feel the wave of constant accessibility?
      </p>
      <p>Do you need to share your advert or broadcast messages on Whatsapp with a quick and direct link for customers to chat you up easily?</p>
      <p>
        Something like:
        <br /> "DM me with {""}
        <a href="https://wa.me/2349036058937"> wa.me/2349036058937</a> for more
        enquiry"
      </p>
      <p>
        Or do you even want a prewritten message embedded for your customers to
        chat you up from your advert? <br />
        <a href="https://api.whatsapp.com/send?phone=2349036058937&text=Hi%20Laplace%2C%20I%20saw%20your%20advert%20and%20I%20want%20to%20buy%20the%20data%20at%20%23350%2Fgb">
          <br /> Like this (click to try it out)
        </a>{" "}
      </p>

      <p>You can do so in simple steps below</p>
      <p className="install" style={{ color: "lightgreen" }}>
        Ps: For easy access, You need to accept the installation of this site on
        your device as an App when you are prompted to do so
      </p>
    </section>
  );
};

export default Info;
