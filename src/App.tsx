import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "@pages";
import "./App.scss";

const App = () => {
  //Dado que no recibo PROPS, no necesito el React.FC (componente funcional)
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
