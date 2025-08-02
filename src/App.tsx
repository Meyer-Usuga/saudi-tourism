import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticNavbar } from "@components/shared/navbar";
import { Footer } from "@components/shared/footer";
import Home from "@pages/Home";
import Destinations from "@pages/Destinations";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <StaticNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
