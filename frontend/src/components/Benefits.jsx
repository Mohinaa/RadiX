import React from 'react';
import styles from './Benefits.module.css';

const BenefitCard = ({ number, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>{number.padStart(2, '0')}</div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Benefits;