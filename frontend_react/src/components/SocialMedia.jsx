import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/devclarino" target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/rommel-clarino-a2b725150/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/Kagerrak" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
