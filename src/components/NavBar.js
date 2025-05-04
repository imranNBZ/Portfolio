import React from 'react';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-navbar">
      <div className="container justify-content-center">
        <div className="navbar-nav gap-5">
          <a className="nav-link nav-item text-uppercase" href="#about">About</a>
          <a className="nav-link nav-item text-uppercase" href="#projects">Projects</a>
          <a className="nav-link nav-item text-uppercase" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
