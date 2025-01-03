import React from "react";
import NavBar from "../components/NavBar";
import styles from "./Home.module.css";
import About from "../components/About";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.mainContent}>
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.textContent}>
                <h1 className={styles.heading}>Start learning with us now</h1>
                <p className={styles.description}>
                  Empowering international students with financial confidence
                  through interactive learning and community support.
                </p>
                <Link to ="/signup">
                  <button
                    className={styles.ctaButton}
                    tabIndex={0}
                    aria-label="Start learning"
                  >
                    Start learning
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c6a8a715aa46b31b369501f607f081dc3526db7abe8a0caa38d971dc56775f"
                className={styles.heroImage}
                alt="International students learning together"
              />
            </div>
          </div>
        </section>
        <section>
          <About />
        </section>
      </div>
    </div>
  );
}
