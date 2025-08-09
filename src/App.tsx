import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticNavbar, Footer } from "@components/shared";
import Home from "@pages/Home";
import Destinations from "@pages/Destinations";
import About from "@pages/About";
import "animate.css";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <StaticNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
