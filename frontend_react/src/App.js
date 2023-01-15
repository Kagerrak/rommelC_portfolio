import React from "react";

import { About, Work, Header, Skills, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header id="home" />
      <About id="about" />
      <Work id="work" />
      <Skills id="skills" />
      {/* <Testimonial id="testimonial" /> */}
      <Footer id="contact" />
    </div>
  );
};

export default App;
