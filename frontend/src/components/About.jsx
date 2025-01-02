import React from 'react';
import styles from './Benefits.module.css';
import BenefitCard from './Benefits';

const benefitsData = [
  {
    number: '1',
    title: 'Interactive Tools',
    description: 'Simplify complex financial concepts with engaging activities.'
  },
  {
    number: '2',
    title: 'Supportive Community',
    description: 'Join our Slack community to ask questions, share tips, and get peer-to-peer support.'
  },
  {
    number: '3',
    title: 'Practical Resources',
    description: 'From budgeting to investments, explore topics that help you build financial confidence.'
  }
];

const BenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <h2 className={styles.sectionTitle}>Our Platform</h2>
          <p className={styles.sectionDescription}>
            Managing finances as an international student can feel overwhelming, but it doesn't have to be. Our platform is built to simplify financial literacy and provide the support you need to thrive in a new country. We believe that everyone deserves the tools and knowledge to make confident financial decisions, no matter where they come from.
            <br />
            <br />
            Through interactive learning, relatable stories, and a welcoming community, we aim to bridge the gap between cultural differences and financial systems. We're here to make the journey easier, together.
          </p>
        </div>
      </div>
      <div className={styles.offeringsHeader}>
        <h2 className={styles.offeringsTitle}>What we offer</h2>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsGrid}>
          {benefitsData.map((benefit) => (
            <BenefitCard
              key={benefit.number}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default <About></About>;