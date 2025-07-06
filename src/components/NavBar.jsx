import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Strathmore Fundraising</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#create-section">Start a Campaign</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}