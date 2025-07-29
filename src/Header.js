import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

function Header({ user }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark-theme', !isDarkTheme);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Import Sacramento font from Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
        rel="stylesheet"
      />
      <header className={`header ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className="header-container">
          <div className="logo-container" onClick={() => window.location.reload()}>
            <img
              src="/assets/ecoCartLogo.png"
              alt="EcoCart Logo"
              className="logo-image"
            />
            <span className="logo-text">EcoCart</span>
          </div>

          <nav className="nav-links">
            <Link to="/landing">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
          </nav>

          <div className="header-actions">
            <button className="search-btn" onClick={toggleSearch}>
              <FaSearch />
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkTheme ? <FaSun /> : <FaMoon />}
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
                autoFocus
              />
            )}

            {user && (
              <div className="user-profile">
                <Link to="/account" className="user-link">
                  <span className="greeting-text">
                    Hi, {user.name?.split(' ')[0] || 'User'}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;