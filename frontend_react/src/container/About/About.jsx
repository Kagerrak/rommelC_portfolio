import React from "react";

import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { sections } from "../../constants";
import { images } from "../../constants";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Building the <span>Future</span>
        <br /> with <span>Decentralized Applications</span>
      </h2>
      <div className="app__about-me">
        <p className="about-text">
          I am a highly motivated and passionate web3 developer with a strong
          interest in blockchain technology and decentralized applications. I am
          constantly seeking to expand my knowledge and skills in this
          cutting-edge field, and am eager to apply my expertise to real-world
          projects.
          <br />
          Although I am new to the industry, I have been consistently learning
          and experimenting with web3 technologies such as Ethereum and smart
          contract development. I have a strong understanding of JavaScript and
          have experience working with web3 libraries and frameworks such as
          Hardhat and Ethers.js.
          <br />I am a quick learner and I am always willing to take on new
          challenges. I am excited about the potential of web3 and blockchain
          technology to revolutionize the way business is done and I am eager to
          be a part of this change. I am looking for an entry-level position
          where I can continue to grow and develop as a web3 developer while
          making valuable contributions to a forward-thinking company.
          <br />
          If you are looking for a skilled and driven web3 developer who is
          eager to learn and grow in the industry, please don't hesitate to
          contact me.
        </p>
      </div>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <a
            href="https://www.cakeresume.com/pdf/s--MKpr-9IVlkgbGUYqwK088Q--/WMJY6.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img src={images.pdf} alt="pdf" />
            <p> Check my CV</p>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg",
  sections
);
