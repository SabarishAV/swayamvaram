import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Close the menu if you click outside of it
  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="Parent_Navbar">
          <div className="logo">
            <img className="logoimg" src={logo} alt="" />
          </div>
          <div className="navlinks">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>About us</li>
              </Link>

              <Link to="/">
                <li>FAQ</li>
              </Link>

              <Link to="/">
                <li>Contact</li>
              </Link>
            </ul>
            <div className="sign_up">
              <p>Already a member?</p>
              <Link to="/login">
                <button>Sign in</button>
              </Link>
            </div>
          </div>
          <div
            className={`navlinksmob ${menuOpen ? "open" : ""}`}
            onClick={closeMenu}
          >
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>About us</li>
              </Link>

              <Link to="/">
                <li>FAQ</li>
              </Link>

              <Link to="/">
                <li>Contact</li>
              </Link>
            </ul>
            <div className="sign_up">
              <p>Already a member?</p>
              <Link to="/login">
                <button>Sign in</button>
              </Link>
            </div>
          </div>
          <div
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
