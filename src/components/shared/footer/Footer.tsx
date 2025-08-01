import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <img
          src="https://res.cloudinary.com/db1tp6eqg/image/upload/v1753923743/logo_nyomzp.svg"
          alt="Web logo"
          loading="lazy"
        />

        <div className="footer__links">
          <div className="footer__items">
            <ul>
              <li>About</li>
              <li>About us</li>
              <li>Features</li>
              <li>News & Blogs</li>
            </ul>
          </div>

          <div className="footer__items">
            <ul>
              <li>Contact</li>
              <li>Instagram</li>
              <li>X / Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>

          <div className="footer__items">
            <ul>
              <li>Support</li>
              <li>FAQs</li>
              <li>Support Centre</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
