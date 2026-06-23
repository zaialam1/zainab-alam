"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const stats = [
  { label: "Podcast Episodes Produced", value: "8" },
  { label: "Guests Interviewed", value: "9" },
  { label: "Live Performances", value: "12+" },
  { label: "Musical Genres Performed", value: "4" },
  { label: "Applications Built", value: "1" },
  { label: "Research Studies Reviewed", value: "24+" },
];

const featuredWork = [
  {
    title: "Singing",
    subtitle: "Recitals and band gigs capturing energy and emotion",
    image: "/images/singing.jpg",
    href: "/singing",
    imageClass: styles.singingImage,
  },
  {
    title: "Podcasting",
    subtitle: "Connecting through pure, honest conversation",
    image: "/images/podcasting.jpg",
    href: "/podcasting/when_we_speak",
    imageClass: styles.podcastingImage,
  },
  {
    title: "Speaking",
    subtitle: "Expressing my own opinion and story using debate and spoken word",
    image: "/images/speaking.jpg",
    href: "/speaking",
    imageClass: styles.speakingImage,
  },
  {
    title: "Web Development",
    subtitle: "Creating something to benefit my community in this new age of AI",
    image: "/images/web-development.jpg",
    href: "/web-development",
    imageClass: styles.webImage,
  },
  {
    title: "The Teen Vocal Initiative",
    subtitle: "Exploring self-confidence in teenagers through vocal training",
    image: "/images/teen-vocal-initiative.jpg",
    href: "/teen-vocal-initiative",
    imageClass: styles.vocalImage,
  },
];

export default function Home() {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    new Array(featuredWork.length).fill(false)
  );

  function toggleCard(index: number) {
    setFlippedCards((prev) =>
      prev.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped))
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>
              Singer • Storyteller • Developer • Researcher
            </p>

            <h1 className={styles.heroTitle}>Zainab Alam</h1>

            <p className={styles.heroIntro}>
              Hi, I&apos;m Zainab, a multidisciplinary artist living in Silicon
              Valley. As a young creator, I’m especially passionate about
              blending forms of music, storytelling, and performance to explore
              emotion, identity, and community. Whether I’m behind the mic
              recording a podcast, singing on stage, or coding an application to
              benefit my community, I see each project as an opportunity to
              connect with others on a deeper level. For me, creativity isn’t
              just about expression — it’s about building bridges and creating
              shared experiences. This site is a home for my work, a space where
              I can share what I’m building, experimenting with, and learning
              along the way.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/singing" className={styles.primaryButton}>
                Explore My Work
              </Link>

              <Link href="/contact" className={styles.secondaryButton}>
                Contact Me
              </Link>
            </div>
          </div>

          <div className={styles.heroImageCard}>
            <img
              src="/images/hero.jpg"
              alt="Zainab Alam standing outdoors"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>At a glance</p>
          <h2 className={styles.sectionTitle}>Creative Snapshot</h2>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Featured work</p>
          <h2 className={styles.sectionTitle}>Explore My Work</h2>
          <p className={styles.sectionDescription}>
            Hover over a card to lift it. Click it to reveal the description.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {featuredWork.map((item, index) => (
            <div key={item.title} className={styles.cardBlock}>
              <button
                type="button"
                className={`${styles.flipCard} ${
                  flippedCards[index] ? styles.flipped : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className={styles.flipCardInner}>
                  <div className={`${styles.cardFace} ${styles.cardFront}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`${styles.cardImage} ${item.imageClass}`}
                    />

                    <div className={styles.cardTitleOverlay}>
                      <h3>{item.title}</h3>
                    </div>
                  </div>

                  <div className={`${styles.cardFace} ${styles.cardBack}`}>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <span>Click to flip back</span>
                  </div>
                </div>
              </button>

              <Link href={item.href} className={styles.cardButton}>
                Go to this page
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}