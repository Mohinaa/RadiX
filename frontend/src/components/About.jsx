import React from 'react';
import styles from './About.module.css';

const benefitsData = [
  {
    number: '1',
    title: 'Interactive Tools',
    description: 'Simplify complex financial concepts with engaging activities.',
  },
  {
    number: '2',
    title: 'Supportive Community',
    description: 'Join our Slack community to ask questions, share tips, and get peer-to-peer support.',
  },
  {
    number: '3',
    title: 'Practical Resources',
    description: 'From budgeting to investments, explore topics that help you build financial confidence.',
  },
];

const About = () => {
  return (
    <>
      <div id="about" className={styles.spacer}></div> {/* Spacer */}
      <section className={styles.benefitsSection}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>Our Platform</h2>
            <p className={styles.sectionDescription}>
              Managing finances as an international student can feel overwhelming, but it doesn't have to be.
              Our platform is built to simplify financial literacy and provide the support you need to thrive in a new country.
              <br />
              <br />
              Through interactive learning, relatable stories, and a welcoming community, we aim to bridge the gap
              between cultural differences and financial systems. We're here to make the journey easier, together.
            </p>
          </div>
        </div>

        <div className={styles.offeringsHeader}>
          <h2 className={styles.offeringsTitle}>What we offer</h2>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            {benefitsData.map((benefit) => (
              <div key={benefit.number} className={styles.card}>
                <div className={styles.cardNumber}>{benefit.number.padStart(2, '0')}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;


