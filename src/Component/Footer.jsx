import React from "react";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramFill,
} from "@remixicon/react";
const Footer = () => {
  return (
    <div className="footer">
      <h3>Vandana Yadav</h3>
      <h4>Follow me</h4>
      <ul className="social-media-icons">
        <li>
          <RiLinkedinFill size={36} color="blue" className="my-icon" />
        </li>
        <li>
          <RiInstagramFill size={36} color="red" className="my-icon" />
        </li>
        <li>
          <RiFacebookFill size={36} color="blue" className="my-icon" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
