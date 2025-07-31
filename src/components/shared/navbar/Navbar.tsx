import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753923743/logo_nyomzp.svg"
          alt="Web logo"
        />
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">Destinations</li>
          <li className="nav__item">About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
