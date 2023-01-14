import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames, sections) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app_flex">
          <Component />
        </div>
        <NavigationDots sections={sections} activeId={idName} />
      </div>
    );
  };

export default AppWrap;
