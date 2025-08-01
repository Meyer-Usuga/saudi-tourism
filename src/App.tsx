import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticNavbar } from "@components/shared/navbar";
import Home from "@pages/Home";
import "./App.scss";
import { Footer } from "@components/shared/footer";

const App = () => {
  return (
    <React.Fragment>
      <StaticNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
