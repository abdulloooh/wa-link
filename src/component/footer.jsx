import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <small className="footer">
      <hr />
      <p>
        <span role="img" aria-label="rocket-emoji">
          🚀
        </span>
        <a href="https://github.com/abdulloooh/wa-link">
          Contribute to this project
        </a>{" "}
        <Link to="/open">📈 See Usage Stat</Link>
      </p>
      <p>
        Created with 💚 by Abdullah. <br /> Ping me on Twitter to suggest a
        feature: <a href="https://twitter.com/abdulloooh">@abdulloooh</a>
      </p>
      <p>
        Disclaimer: Whatsapp-link is not affiliated with WhatsApp Inc. <br />{" "}
        2020 &copy; Whatsapp-link | All rights reserved{" "}
      </p>
    </small>
  );
};

export default Footer;
