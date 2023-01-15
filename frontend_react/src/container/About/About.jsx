import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { sections } from "../../constants";

const About = () => {
  // const abouts = [
  //   {
  //     title: "Web Development",
  //     description: "I am a good web developer",
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: "Frontend Development",
  //     description: "I am a good web developer",
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: "Backend Development",
  //     description: "I am a good web developer",
  //     imgUrl: images.about03,
  //   },
  //   {
  //     title: "MERN Stack",
  //     description: "I am a good web developer",
  //     imgUrl: images.about04,
  //   },
  // ];

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

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
          projects. Although I am new to the industry, I have been consistently
          learning and experimenting with web3 technologies such as Ethereum,
          Solidity and smart contract development. I have a strong understanding
          of JavaScript and Python and I am familiar with web3 libraries and
          frameworks such as web3.js, Truffle and Embark. I am a quick learner
          and I am always willing to take on new challenges. I am excited about
          the potential of web3 and blockchain technology to revolutionize the
          way business is done and I am eager to be a part of this change. I am
          looking for an entry-level position where I can continue to grow and
          develop as a web3 developer while making valuable contributions to a
          forward-thinking company. If you are looking for a skilled and driven
          web3 developer who is eager to learn and grow in the industry, please
          don't hesitate to contact me."
        </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
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
