import Image from "next/image";
import styles from "./page.module.css";

const featuredEpisodes = [
  {
    title: "Adam Maurey",
    role: "Teacher",
    image: "/images/adam.jpg",
    description:
      "Learn how each piece of handcrafted furniture carries its own story, with woodworker and design engineer Adam Maurey.",
  },
  {
    title: "Agata",
    role: "Student",
    image: "/images/agata.jpg",
    description:
      "Hear how one student transformed curiosity into leadership while building community through robotics.",
  },
  {
    title: "Gabe Hawkins",
    role: "Alum",
    image: "/images/gabe.jpg",
    description:
      "Nueva alum Gabe shares his journey as a journalist, from reporting on national politics at the White House to studying journalism at Northwestern University.",
  },
];

export default function WhenWeSpeakPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>Official Nueva Podcast</p>
            <h1 className={styles.heroTitle}>When We Speak</h1>
            <p className={styles.heroDescription}>
              When We Speak is the official Nueva school podcast exploring
              authentic human storytelling in an age increasingly shaped by
              AI-generated content. Through conversations with students,
              faculty, and alumni, the series celebrates the experiences that
              make us human.
            </p>
          </div>

          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageCard}>
              <Image
                src="/images/when-we-speak.jpg"
                alt="When We Speak podcast"
                width={620}
                height={720}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.sunBadge}>8 episodes</div>
          </div>
        </div>
      </section>

      <section className={styles.goalsSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Main Goals</p>
          <h2>Why this podcast exists</h2>
        </div>

        <div className={styles.goalsGrid}>
          <article className={styles.goalCard}>
            <span className={styles.goalNumber}>01</span>
            <h3>Connection</h3>
            <p>
              Many people today feel detached from the real world, often as a
              result of loneliness or because social media presents a life that
              is not honest or true. By capturing the authentic human stories of
              members of The Nueva School community — students, alumni, and
              faculty — When We Speak aims to give listeners a sense of
              community and connection to the real world.
            </p>
          </article>

          <article className={styles.goalCard}>
            <span className={styles.goalNumber}>02</span>
            <h3>AI vs Humans</h3>
            <p>
              Due to the rapid adoption of generative AI, creators everywhere
              are afraid of losing their voice. The goal of When We Speak is to
              elevate human experience and the human voice.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsCard}>
          <div>
            <p className={styles.kicker}>Highlights</p>
            <h2>Storytelling with heart</h2>
          </div>

          <div className={styles.highlightList}>
            <div className={styles.highlightItem}>
              <strong>8</strong>
              <span>episodes produced</span>
            </div>
            <div className={styles.highlightItem}>
              <strong>Official</strong>
              <span>Nueva podcast</span>
            </div>
            <div className={styles.highlightItem}>
              <strong>Students</strong>
              <span>educators and creators featured</span>
            </div>
            <div className={styles.highlightItem}>
              <strong>Human</strong>
              <span>stories, voice, and connection</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.episodesSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Featured Episodes</p>
          <h2>Conversations worth hearing</h2>
        </div>

        <div className={styles.episodeGrid}>
          {featuredEpisodes.map((episode, index) => (
            <article className={styles.episodeCard} key={episode.title}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.episodeImageWrap}>
                    <Image
                      src={episode.image}
                      alt={`${episode.title} episode`}
                      width={460}
                      height={560}
                      className={styles.episodeImage}
                    />
                  </div>

                  <div className={styles.frontText}>
                    <span className={styles.episodeNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{episode.title}</h3>
                  </div>
                </div>

                <div className={styles.cardBack}>
                  <span className={styles.roleBadge}>{episode.role}</span>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.visitSection}>
        <div className={styles.visitCard}>
          <p className={styles.kicker}>Explore More</p>
          <h2>Visit the full podcast website</h2>
          <p>
            See the complete When We Speak project, including the full episode
            collection and more stories from the Nueva community.
          </p>

          <a
            href="https://when-we-speak.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visit the Full Website →
          </a>
        </div>
      </section>
    </main>
  );
}