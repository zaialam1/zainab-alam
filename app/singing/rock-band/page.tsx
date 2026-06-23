import styles from "./page.module.css";

const performances = [
  {
    title: "Guild",
    youtubeId: "3L7dhR2Ap1Y",
  },
  {
    title: "No More Tears",
    youtubeId: "FAY3cp4_x0M",
  },
  {
    title: "Umbrella",
    youtubeId: "CW1UhLTbA0k",
  },
  {
    title: "When You Were Young",
    youtubeId: "ToSY6RvSC_4",
  },
];

const lessons = [
  {
    title: "Confidence",
    description: "Learning to stay calm under pressure.",
  },
  {
    title: "Connection",
    description: "Creating energy with an audience.",
  },
  {
    title: "Collaboration",
    description: "Trusting bandmates and working as a team.",
  },
];

const tips = [
  {
    number: "Tip #1",
    text: "Have a single encouraging phrase which you can repeat to yourself over and over again whenever you get nervous.",
  },
  {
    number: "Tip #2",
    text: "Look at people's foreheads instead of their eyes so it looks like you're making eye contact but without the nerves.",
  },
  {
    number: "Tip #3",
    text: "Choreograph a routine before performing so that you don't freeze up and stand awkwardly in the middle of the stage.",
  },
];

export default function RockPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Rock Band</p>
          <h1 className={styles.heroTitle}>The Streetlight People</h1>

          <div className={styles.heroImageWrap}>
            <img
              src="/images/streetlight-people.jpg"
              alt="The Streetlight People band"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>About the Band</p>
          <h2>Growing Into Our Sound</h2>
        </div>

        <div className={styles.aboutCard}>
          <p>
            My band, the Streetlight People, first came together in 6th grade,
            and what started as a small, almost experimental group has turned
            into something much more meaningful. Back then, we were just
            figuring out how to play together, learning how to listen to each
            other, and performing mostly at school events where the audience was
            familiar.
          </p>

          <p>
            Over time, though, something shifted—we started to sound more
            confident, more unified, and more like a real band with a shared
            identity instead of just a group of individual musicians. It has
            been an amazing journey watching us grow not only in skill, but also
            in trust and stage presence.
          </p>

          <p>
            Now, looking back, it feels almost surreal that we’ve moved from
            simple school performances to playing outside gigs at different
            venues, where we had to earn the audience’s attention from scratch.
            Each performance has added a new layer to who we are as musicians,
            and it’s exciting to think about how much further we can still go
            from here.
          </p>
        </div>
      </section>

      <section className={styles.performancesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Performances</p>
          <h2>Live Moments</h2>
        </div>

        <div className={styles.videoGrid}>
          {performances.map((performance) => (
            <article className={styles.videoCard} key={performance.title}>
              <div className={styles.videoFrame}>
                <iframe
                  className={styles.video}
                  src={`https://www.youtube.com/embed/${performance.youtubeId}`}
                  title={`${performance.title} performance by The Streetlight People`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <h3>{performance.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.lessonsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>What Performing Live Taught Me</p>
          <h2>Lessons From the Stage</h2>
        </div>

        <div className={styles.lessonGrid}>
          {lessons.map((lesson) => (
            <article className={styles.lessonCard} key={lesson.title}>
              <div className={styles.lessonDecoration}>
                <span />
                <span />
                <span />
              </div>

              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.tipsSection}>
        <div className={styles.tipsCard}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Stage Fright Tips</p>
            <h2>Finding Comfort in the Spotlight</h2>
          </div>

          <p className={styles.tipsIntro}>
            There is nothing remotely close to the feeling of being in the
            spotlight onstage, with hundreds of eyes on you. At first I was
            hesitant, but then I learned to love it. If you have stage fright
            also, here are some tips that helped me and which can hopefully help
            you too:
          </p>

          <div className={styles.tipsList}>
            {tips.map((tip) => (
              <article className={styles.tipItem} key={tip.number}>
                <h3>{tip.number}</h3>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}