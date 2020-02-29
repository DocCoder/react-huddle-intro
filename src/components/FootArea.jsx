import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function FootArea() {
  return (
    <div className="footarea">
      <IconContext.Provider
        value={{ size: "20px", fontWeight: "200", className: "icons" }}
      >
        <FiFacebook />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ size: "20px", fontWeight: "200", className: "icons" }}
      >
        <FiTwitter />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ size: "20px", fontWeight: "200", className: "icons" }}
      >
        <FiInstagram />
      </IconContext.Provider>
    </div>
  );
}
