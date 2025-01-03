import React from "react";
import styles from "./Community.module.css";

const avatarData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f5f933758675c3fb2b2f369743f0c12189725834a17da6a1ffd588810d2856f", alt: "Community member 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9ae3c4a9339318e22fe7f8da3b6622c7ff0cc0f63fc6c4d25bf0039bc615de3", alt: "Community member 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f024828c517379e02d90c2c8ee5c33e4a408c406d583497b34f3ca54338cdab5", alt: "Community member 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4073a3f15044f3f31767b7a5ae94b1faa51f27a1bc5bd96c85ae2cf1f94efc9c", alt: "Community member 4" },
];

const Community = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Start growing with our community</h2>
        <p className={styles.description}>
          Be part of the solution, join our financial support network!
        </p>
        <a
          href="https://join.slack.com/t/radix-fhr9912/shared_invite/zt-2xgrth2ds-PG~6GEFbX9GnRAW9kOxQ5A"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Join community
        </a>
        <div className={styles.avatars}>
          {avatarData.map((avatar, index) => (
            <img key={index} src={avatar.src} alt={avatar.alt} className={styles.avatar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;



