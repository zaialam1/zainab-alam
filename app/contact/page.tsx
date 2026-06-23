import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <p className={styles.kicker}>Get in Touch</p>

          <h1 className={styles.title}>Contact</h1>

          <div className={styles.contactDetails}>
            <div className={styles.contactRow}>
              <span>Email</span>
              <a href="mailto:zainab.r.alam@gmail.com">
                zainab.r.alam@gmail.com
              </a>
            </div>

            <div className={styles.contactRow}>
              <span>LinkedIn</span>
              <p>coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}