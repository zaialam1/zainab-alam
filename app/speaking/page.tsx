import styles from "./page.module.css";

export default function SpeakingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Speaking & Storytelling</p>

          <h1 className={styles.title}>Public Speaking</h1>

          <p className={styles.intro}>
            Public speaking is easily one of the most nerve-wracking things I’ve
            ever experienced. I still remember the feeling before I would walk up
            to speak—my thoughts would race, my hands would get tense, and even
            the first few words sometimes felt stuck somewhere between my mind
            and my mouth.
          </p>

          <p className={styles.intro}>
            But at the same time, I’ve slowly realized that everything I love
            doing asks me to face that fear in some way: singing in front of a
            crowd, having genuine conversations with podcast guests, and sharing
            my work all require me to be fully present and comfortable in my own
            skin.
          </p>
        </div>
      </section>

      <section className={styles.reflectionSection}>
        <div className={styles.reflectionCard}>
          <span className={styles.softLabel}>finding my voice</span>

          <p>
            Over the past few years, something has shifted. The stuttering that
            once interrupted my speeches has faded, and in its place, I’ve
            started to find rhythm in my voice.
          </p>

          <p>
            When I present now, I don’t just try to “get through it”—I actually
            try to mean what I’m saying, to let emotion and emphasis shape my
            words. Somewhere along the way, speaking stopped feeling like
            something I had to survive and started feeling like something I could
            shape.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Practice & Growth</p>
          <h2>Parliamentary Debate</h2>
        </div>

        <div className={styles.debateGrid}>
          <article className={styles.skillCard}>
            <span className={styles.cardNumber}>01</span>
            <h3>Thinking on my feet</h3>
            <p>
              Parliamentary debate taught me how to think quickly under
              pressure, organize my thoughts in real time, and respond without
              overthinking every detail.
            </p>
          </article>

          <article className={styles.skillCard}>
            <span className={styles.cardNumber}>02</span>
            <h3>Building stronger arguments</h3>
            <p>
              It pushed me to build arguments that are not only persuasive, but
              also structured—making sure every claim is supported and clearly
              connected to the bigger point I’m trying to prove.
            </p>
          </article>

          <article className={styles.skillCard}>
            <span className={styles.cardNumber}>03</span>
            <h3>Listening with intention</h3>
            <p>
              It taught me to listen to opposing views, not just to wait for my
              turn to speak, but to understand what the other side is saying so I
              can respond more effectively and adapt my argument in the moment.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoIntro}>
          <p className={styles.kicker}>Featured Speech</p>
          <h2>Graduation Speech</h2>
          <p>
            For my 8th graduation, each student was tasked with writing a
            one-hundred-word speech and presenting it at the ceremony.
          </p>
        </div>

        <div className={styles.videoLayout}>
          <div className={styles.videoFrame}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/12TLgGxhyuk"
              title="Graduation speech"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.approachCard}>
              <h3>The Challenge</h3>
              <p>
                The challenge was to say something meaningful in only one hundred
                words while still making it feel personal, creative, and true to
                my experience.
              </p>

              <h3>My Approach</h3>
              <p>
                I decided to take a more innovative approach with what I wrote,
                focusing on an extended metaphor of drawing and creating to
                represent how Nueva had helped me grow.
              </p>
            </div>

            <div className={styles.spokenWordCard}>
              <p className={styles.kicker}>Creative Expression</p>
              <h2>Spoken Word</h2>
              <p>
                I am also interested in spoken word as a powerful form of
                storytelling and self-expression. I love how it combines writing,
                rhythm, voice, and emotion into something that feels both
                personal and alive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}