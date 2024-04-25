import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./logo.png" alt="logo" className="logo" width={220} />

        {/* menu */}
        <div
          ref={menuRef}
          className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}
        >
          <Link to="/">Home</Link>
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Guide</a>
          <Link to="/contact">Contact</Link>
          <a
            href="#"
            className="allready-member"
            style={{ fontSize: "14px", fontWeight: "100" }}
          >
            Already a member?
          </a>
          <Link to="/Login">
            <button className="button">
              <a href="">Sign in</a>
            </button>
          </Link>
        </div>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
