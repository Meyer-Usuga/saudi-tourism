import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticNavbar } from "@components/shared/navbar";
import Home from "@pages/Home";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <StaticNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
