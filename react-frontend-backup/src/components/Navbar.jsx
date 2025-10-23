import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#events">Events</a></li>
        <li><Link to="/join">Join</Link></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}
