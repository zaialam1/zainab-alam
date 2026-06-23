import styles from "./page.module.css";

const plannedFeatures = [
  "Singer interviews",
  "Performance stories",
  "Confidence journeys",
  "Vocal advice",
];

export default function OneNoteAtATimePage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroCard}>
          <p className={styles.kicker}>Coming Soon</p>

          <h1 className={styles.title}>One Note at a Time</h1>

          <p className={styles.description}>
            One Note at a Time plans to explore how singers build confidence,
            overcome fear, and discover their voices.
          </p>

          <div className={styles.divider} />

          <div className={styles.featuresBlock}>
            <p className={styles.featuresLabel}>Planned Features</p>

            <div className={styles.featuresGrid}>
              {plannedFeatures.map((feature, index) => (
                <div className={styles.featureCard} key={feature}>
                  <span className={styles.featureNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{feature}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.comingSoonBadge}>Coming soon!</div>
        </div>
      </section>
    </main>
  );
}