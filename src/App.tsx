import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-white  ">
      <Header />
      <Hero />
      <Sponsors />
      <Gallery />
      <About />
    </div>
  );
};

export default App;
