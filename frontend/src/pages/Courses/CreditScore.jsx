import React, { useState } from "react";
import styles from "./CreditScore.module.css";
import content from "./creditScoreContent.json";
import NavBar from "../../components/NavBar";

const CreditScore = () => {
  const mainArticles = content.filter((item) => item.type === "article");
  const flashCards = content.filter((item) => item.type === "flashcard");

  return (
    <div className={styles.module}>
      <NavBar />
      <h1 className={styles.title}>Understanding Credit Scores</h1>

      {/* Score Range Visualization */}
      <div className={styles.scoreVisual}>
        <div className={styles.scoreBar}>
          <span className={styles.scoreMarker} style={{ left: "0%" }}>300</span>
          <span className={styles.scoreMarker} style={{ left: "50%" }}>600</span>
          <span className={styles.scoreMarker} style={{ left: "100%" }}>850</span>
        </div>
      </div>

      {/* Article Content */}
      <div className={styles.articleSection}>
        {mainArticles.map((article, index) => (
          <div key={index} className={styles.article}>
            <div className={styles.articleCard}>
              <h2>{article.title}</h2>
              {article.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {index === 0 && (
                <div className={styles.scoreRanges}>
                  <h3>Credit Score Ranges:</h3>
                  <ul>
                    <li><span className={styles.scoreBadge}>Poor</span> 300-579</li>
                    <li><span className={styles.scoreBadge}>Fair</span> 580-669</li>
                    <li><span className={styles.scoreBadge}>Good</span> 670-739</li>
                    <li><span className={styles.scoreBadge}>Very Good</span> 740-799</li>
                    <li><span className={styles.scoreBadge}>Excellent</span> 800-850</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Flashcard Content */}
      <h2 className={styles.subtitle}>Key Concepts</h2>
      <div className={styles.container}>
        {flashCards.map((section, index) => (
          <FlashCard 
            key={index} 
            front={section.front} 
            back={section.back}
            color={`card${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const FlashCard = ({ front, back, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.flashCard} ${isFlipped ? styles.flipped : ""} ${styles[color]}`}
      onClick={handleFlip}
    >
      <div className={styles.flashCardInner}>
        <div className={styles.flashCardFront}>
          <h3>{front}</h3>
          <div className={styles.flipHint}>Click to flip</div>
        </div>
        <div className={styles.flashCardBack}>
          <ul>
            {back.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;



