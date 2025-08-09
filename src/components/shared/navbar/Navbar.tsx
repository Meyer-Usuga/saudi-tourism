import { useNavigate } from "react-router-dom";
import { Button } from "@components/shared";
import { useEffect } from "react";
import "./Navbar.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753923743/logo_nyomzp.svg"
          alt="Web logo"
          onClick={() => navigate("/")}
          loading="lazy"
        />
      </div>

      <Button
        className={`burger ${isOpen ? "active" : ""}`}
        type="secondary"
        size="small"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </Button>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="nav__item" onClick={() => navigate("/destinations")}>
            Destinations
          </li>
          <li className="nav__item" onClick={() => navigate("/about")}>
            About
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
