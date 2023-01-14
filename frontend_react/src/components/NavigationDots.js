import React, { useState, useEffect } from "react";

const NavigationDots = ({ sections, activeId }) => {
  const [active, setActive] = useState(activeId);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element.getBoundingClientRect().top < window.innerHeight / 2) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
        <a href={`#${item}`} key={item + index}>
          <div
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          ></div>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
