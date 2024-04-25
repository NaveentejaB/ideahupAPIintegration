import React, { useState, useEffect } from "react";
import "./NavBar.css";

// custom Imports
import Logo from "../../assets/logo/ideahub_logo.svg";
import { NavLinks } from "../../constants";

// react icons
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Assume isLoggedIn is a state that indicates whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the login status (for demonstration purposes)
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`nav_bar ${isMobileView ? "mobile_view" : ""} container`}>
      <a href="/" className="logo">
        <img className="logo_img" alt="logo" src={Logo} width={180} />
      </a>
      <div className={`nav_links ${isMobileMenuOpen ? "active" : ""}`}>
        {NavLinks.map((link) => (
          <a href={link.path} className="nav-link" key={link.title}>
            {link.title}
          </a>
        ))}
      </div>

      {isLoggedIn ? (
        <div className="user_details">
          <span className="user_name">John Doe</span>
          <button className="logout_btn" onClick={toggleLoginStatus}>
            Logout
          </button>
        </div>
      ) : (
        <div className="nav_btn">
          <a className="nrml_btn" href="/login">
            Login
          </a>
          <a className="primary_btn" href="/register">
            Register
          </a>
        </div>
      )}
      <div className="mobile_menu_icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaXmark className="icon" />
        ) : (
          <FaBarsStaggered className="icon" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
