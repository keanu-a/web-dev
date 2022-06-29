import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/keanu-aloua"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      {/* <div>
        <FaFacebookF />
      </div> */}

      <a href="https://github.com/keanu-a" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
