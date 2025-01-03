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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li className={styles.dropdown}>
          <Link to = "/courses"> <a>Courses ▾</a></Link>
          <ul className={styles.dropdownMenu}>
            <Link to ="/credit-score"><li><a>Credit Score</a></li></Link>
            <Link to = "/taxes"><li><a>Taxes</a></li></Link>
            <Link to="/investing"><li><a>Investment</a></li></Link>
            <Link to="/budgeting"><li><a>Budgeting</a></li></Link>
          </ul>
        </li>
      </ul>

      <Link to = "/login"><button className={styles.signInButton}>Sign in</button></Link>
    </nav>
  );
};


export default NavBar;

