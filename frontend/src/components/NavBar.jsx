import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.brandContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69d664e6e31d075f47fb0874e4081c47eb7c648c9c1afa5d63ac19a63bb7135?placeholderIfAbsent=true&apiKey=b909987053dc4de7843d490048c18705"
          className={styles.brandLogo}
          alt="RadiX Logo"
        />
        <span className={styles.brandName}>RadiX</span>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <a href="/#home">Home</a> {/* Absolute links to ensure proper navigation */}
        </li>
        <li>
          <a href="/#about">About</a> {/* Absolute links for Home page sections */}
        </li>
        <li className={styles.dropdown}>
          <Link to="/courses">Courses ▾</Link> {/* Courses main page */}
          <ul className={styles.dropdownMenu}>
            <li>
              <Link to="/credit-score">Credit Score</Link>
            </li>
            <li>
              <Link to="/taxes">Taxes</Link>
            </li>
            <li>
              <Link to="/investing">Investment</Link>
            </li>
            <li>
              <Link to="/budgeting">Budgeting</Link>
            </li>
          </ul>
        </li>
      </ul>

      <Link to="/login">
        <button className={styles.signInButton}>Sign in</button>
      </Link>
    </nav>
  );
};

export default NavBar;

