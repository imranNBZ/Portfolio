import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-section">
      <nav className="custom-navbar d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/">
            <img src="/logo.webp" alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* Hamburger toggle button */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Nav links */}
        <div className={`nav-links d-flex gap-4 ${isOpen ? 'show' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#tech-stack" onClick={() => setIsOpen(false)}>My Tech Stack</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="header-center text-center">
        <h1 className="hero-title">Hi, I’m Imran <span role="img" aria-label="waving hand">👋</span></h1>
        <p className="hero-subtitle">Full-Stack Software Engineer</p>
        <p className="hero-stack">React • Node.js • PostgreSQL • Firebase</p>
        <p>
          <a
            href="/Imran_Nabizada_-_ (1).pdf"
            download
            className="btn btn-resume mt-4"
          >
            📄 Download My Resume
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
