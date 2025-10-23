import React, { useState } from "react";
import "./Navbar.css";
// IMPORT NavLink HERE
import { useNavigate, NavLink } from "react-router-dom"; 

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO serves as the Home link */}
        <NavLink
          to="/" 
          className="nav-logo"
          onClick={closeMenu}
          end 
        >
          Tufts ASA
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
          {/* REMOVED THE REDUNDANT <li> FOR "HOME" HERE. 
            The list now starts with "About".
          */}
          
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Contact
            </a>
          </li>
          
          {/* Use NavLink for "Join" */}
          <li>
            <NavLink
              to="/join" 
              onClick={closeMenu}
            >
              Join
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};
