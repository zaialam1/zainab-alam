import styles from "./page.module.css";

const musicalStyles = [
  {
    title: "Rock",
    description:
      "Bold, emotional, and full of energy. Rock lets me express confidence, intensity, and the parts of a feeling that need to be released out loud.",
    visual: "rock",
  },
  {
    title: "Classical",
    description:
      "Elegant, disciplined, and expressive in a quieter way. Classical music helps me focus on tone, control, emotion, and the beauty of detail.",
    visual: "classical",
  },
  {
    title: "Musical Theatre / Jazz",
    description:
      "Story-driven, expressive, and full of personality. This style lets me blend voice, character, emotion, and interpretation into one performance.",
    visual: "theatre",
  },
];

export default function SingingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroDecorOne} />
        <div className={styles.heroDecorTwo} />

        <div className={styles.heroContent}>
          <p className={styles.kicker}>Creative Portfolio</p>
          <h1 className={styles.title}>Singing</h1>
          <p className={styles.subtitle}>
            Music is one of the most personal ways I understand myself, express
            emotion, and share meaning beyond ordinary conversation.
          </p>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introCard}>
          <div className={styles.introOrnament}>
            <span />
            <span />
            <span />
          </div>

          <p>
            To me, music is something truly personal. It is a form of expression
            that is unique to me. It’s the one space where I don’t have to
            translate my thoughts into the “right” words or worry about how they
            might be interpreted. Instead, I can take whatever I’m feeling in
            the moment and turn it into something that actually makes sense to
            me. Sometimes, I use it as my own personal language, while on other
            occasions, I can spread the message.
          </p>

          <p>
            Music also feels like a version of my voice that exists outside of
            conversation. When I sing or play, I’m not just trying to be
            understood; I’m trying to be honest. Sometimes that honesty is loud
            and full, like when a song matches exactly how I feel in a moment.
            Other times it’s quiet, like a simple melody that holds something I
            don’t fully know how to say yet. It really depends on my own
            interpretation, how I as a person can take an existing song and mold
            it into the message I’m trying to convey.
          </p>
        </div>
      </section>

      <section className={styles.stylesSection}>
        <div className={styles.sectionHeading}>
            <h2>Musical Styles</h2>
        </div>

        <div className={styles.cardGrid}>
          {musicalStyles.map((style) => (
            <article className={styles.styleCard} key={style.title}>
              <div className={styles.cardVisual}>
                {style.visual === "rock" && (
                  <div className={styles.rockVisual}>
                    <div className={styles.guitarBody} />
                    <div className={styles.guitarNeck} />
                    <div className={styles.guitarStrings} />
                    <div className={styles.sparkOne} />
                    <div className={styles.sparkTwo} />
                  </div>
                )}

                {style.visual === "classical" && (
                  <div className={styles.classicalVisual}>
                    <div className={styles.record} />
                    <div className={styles.recordCenter} />
                    <div className={styles.pianoKeys}>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.musicLineOne} />
                    <div className={styles.musicLineTwo} />
                  </div>
                )}

                {style.visual === "theatre" && (
                  <div className={styles.theatreVisual}>
                    <div className={styles.stageCurtainLeft} />
                    <div className={styles.stageCurtainRight} />
                    <div className={styles.spotlight} />
                    <div className={styles.microphone} />
                    <div className={styles.microphoneStand} />
                  </div>
                )}
              </div>

              <h3>{style.title}</h3>
              <p>{style.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection}>
        <blockquote>
          “Music gives a soul to the universe, wings to the mind, flight to the
          imagination, and life to everything.”
        </blockquote>
        <p>— Plato, ancient Greek philosopher</p>
      </section>
    </main>
  );
}