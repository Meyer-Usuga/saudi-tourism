import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753923743/logo_nyomzp.svg"
          alt="Web logo"
          onClick={() => navigate("/")}
        />
      </div>

      <nav className="nav">
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
