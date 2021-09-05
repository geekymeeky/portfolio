import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Social = ({ iconSize }) => {
  return (
    <div className="social block mx-auto bg-transparent items-center justify-center p-6">
      <a
        href="https://www.facebook.com/srijan.gupta.56/"
        className="youtube social p-5 rounded-full"
      >
        <FontAwesomeIcon icon={faFacebook} size={iconSize} />
      </a>
      <a
        href="https://twitter.com/lisztomaniac94"
        className="youtube social px-5"
      >
        <FontAwesomeIcon icon={faTwitter} size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/srijankrgupta"
        className="youtube social px-5"
      >
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>
      <a href="https://github.com/geekymeeky" className="youtube social px-5">
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>
    </div>
  );
};

export default Social;
