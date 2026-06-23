import styles from "./page.module.css";

const repertoire = [
  {
    category: "Classical",
    pieces: [
      {
        title: "Adela",
        detail: "by Joaquín Rodrigo",
      },
      {
        title: "Wouldn’t It Be Loverly",
        detail: "by Frederick Loewe",
      },
      {
        title: "Caro Mio Ben",
        detail: "by Giuseppe Giordani",
      },
      {
        title: "Plaisir D’Amour",
        detail: "by Jean-Paul-Égide Martini",
      },
    ],
  },
  {
    category: "Musical Theatre",
    pieces: [
      {
        title: "Loveliest of Trees",
        detail: "by John Duke",
      },
      {
        title: "Goodnight, My Someone",
        detail: "from The Music Man",
      },
      {
        title: "Burn",
        detail: "from Hamilton",
      },
      {
        title: "I Dreamed a Dream",
        detail: "from Les Misérables",
      },
      {
        title: "Far From the Home I Love",
        detail: "from Fiddler on the Roof",
      },
      {
        title: "Part of Your World",
        detail: "from The Little Mermaid",
      },
      {
        title: "For Good",
        detail: "from Wicked",
      },
      {
        title: "I Remember",
        detail: "by Stephen Sondheim",
      },
      {
        title: "Omar Sharif",
        detail: "from The Band’s Visit",
      },
    ],
  },
  {
    category: "Jazz and Pop",
    pieces: [
      {
        title: "Honeysuckle Rose",
        detail: "by Fats Waller",
      },
      {
        title: "A Thousand Years",
        detail: "by Christina Perri",
      },
      {
        title: "Fly Me to the Moon",
        detail: "by Frank Sinatra",
      },
      {
        title: "Over the Rainbow",
        detail: "by Harold Arlen",
      },
      {
        title: "Like Someone in Love",
        detail: "by Jimmy Van Heusen",
      },
      {
        title: "I Will",
        detail: "by The Beatles",
      },
      {
        title: "Hang On, Little Tomato",
        detail: "by Pink Martini",
      },
    ],
  },
];

const favorites = [
  {
    title: "For Good",
    youtubeId: "GNyrS52XBvs",
  },
  {
    title: "I Remember",
    youtubeId: "cMw6M3nrlEo",
  },
  {
    title: "Omar Sharif",
    youtubeId: "tIb3qGtGGN0",
  },
];

const lessons = [
  {
    title: "Vulnerability",
    points: [
      "Singing alone removes the safety net of a group, making every sound feel more exposed.",
      "It can feel intimidating to be the only voice on stage, but that exposure builds confidence over time.",
      "It teaches me to sit with discomfort and still choose to show up fully.",
    ],
  },
  {
    title: "Preparation",
    points: [
      "Solo singing requires complete ownership of the piece — there’s no one else to rely on if something goes off.",
      "It pushes me to practice more intentionally, focusing on technique, timing, and emotion.",
      "I’ve learned to break songs down into details like breath control, phrasing, and dynamics.",
    ],
  },
  {
    title: "Personal Expression",
    points: [
      "Without other voices or instruments blending in, my own interpretation becomes the center of the performance.",
      "I can shape the song through tone, emotion, and phrasing to reflect what I personally feel.",
      "Solo performance helps me develop a stronger sense of artistic identity and voice.",
    ],
  },
];

export default function SoloPerformancesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Solo Voice</p>
          <h1 className={styles.heroTitle}>Solo Performances</h1>
          <p className={styles.heroIntro}>
            Performing alone has helped me understand my voice more deeply — not
            just as a sound, but as a way to communicate emotion, character, and
            personal interpretation.
          </p>
        </div>
      </section>

      <section className={styles.repertoireSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Repertoire</p>
          <h2>Pieces I’ve Studied and Performed</h2>
        </div>

        <div className={styles.repertoireGrid}>
          {repertoire.map((group) => (
            <article className={styles.repertoireCard} key={group.category}>
              <h3>{group.category}</h3>

              <ul>
                {group.pieces.map((piece) => (
                  <li key={`${group.category}-${piece.title}`}>
                    <em>{piece.title}</em> <span>{piece.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.favoritesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Favorite Pieces</p>
          <h2>Selected Solo Performances</h2>
        </div>

        <div className={styles.videoGrid}>
          {favorites.map((favorite) => (
            <article className={styles.videoCard} key={favorite.title}>
              <div className={styles.videoFrame}>
                <iframe
                  className={styles.video}
                  src={`https://www.youtube.com/embed/${favorite.youtubeId}`}
                  title={`${favorite.title} solo performance`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <h3>
                <em>{favorite.title}</em>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.lessonsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>What Solo Performance Taught Me</p>
          <h2>Lessons From Singing Alone</h2>
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

              <ul>
                {lesson.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}