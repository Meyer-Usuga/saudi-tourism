import { useState } from "react";
import Navbar from "./Navbar";
import "./Navbar.scss";

const FixedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed__navbar ${isOpen ? "active" : ""}`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default FixedNavbar;
