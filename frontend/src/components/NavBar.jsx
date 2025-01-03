import React from "react";
import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';

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
          <Link to ="/"><a>Home</a></Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li className={styles.dropdown}>
          <Link to = "/courses"> <a>Courses ▾</a></Link>
          <ul className={styles.dropdownMenu}>
            <li><a href="#credit-score">Credit Score</a></li>
            <li><a href="#taxes">Taxes</a></li>
            <li><a href="#investment">Investment</a></li>
            <li><a href="#budgeting">Budgeting</a></li>
          </ul>
        </li>
      </ul>

      {/* Sign In Button */}
      <Link to = "/login"><button className={styles.signInButton}>Sign in</button></Link>
    </nav>
  );
};


export default NavBar;

