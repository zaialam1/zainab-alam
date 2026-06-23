import styles from "./page.module.css";

const storySteps = [
  {
    grade: "5th Grade",
    title: "Joined Nueva",
    text: "I joined my new school as a very shy student who wasn’t very confident or outspoken.",
  },
  {
    grade: "6th Grade",
    title: "Beatles Song",
    text: "In a required music class, everyone had to perform a Beatles song, and I found myself genuinely enjoying the experience of performing.",
  },
  {
    grade: "Later That Year",
    title: "Started My Band",
    text: "I decided to start my own band. The beginning was rough, but it pushed me to keep improving.",
  },
  {
    grade: "Over Time",
    title: "Grew as a Performer",
    text: "I grew significantly as a performer and became much more confident on stage.",
  },
  {
    grade: "Looking Back",
    title: "Realization",
    text: "That growth didn’t just stay in music. It carried into other parts of my life, helping me become more outgoing, expressive, and comfortable around others.",
  },
];

const phaseOneTags = [
  "Emotional Expression",
  "Mood Regulation",
  "Self Confidence",
  "Communication",
  "Identity",
];

const phaseTwoTags = [
  "Surveys",
  "Workshops",
  "Longitudinal Tracking",
  "Teen Participants",
];

export default function TeenVocalInitiativePage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroTexture} aria-hidden="true">
          <span className={styles.staffLineOne} />
          <span className={styles.staffLineTwo} />
          <span className={styles.noteOne}>♪</span>
          <span className={styles.noteTwo}>♫</span>
          <span className={styles.noteThree}>♪</span>
        </div>

        <div className={styles.heroInner}>
          <p className={styles.kicker}>Research • Performance • Identity</p>
          <h1 className={styles.title}>Teen Vocal Initiative</h1>
          <p className={styles.subtitle}>
            Exploring how voice shapes confidence, self-expression, and
            identity in teenagers.
          </p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>My Personal Story</p>
          <h2>A journey that started quietly</h2>
          <p>
            What began as shyness slowly turned into a love of performance, and
            eventually into a deeper question about how voice shapes confidence.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {storySteps.map((step, index) => (
            <article
              key={step.title}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.timelineDot} aria-hidden="true" />
              <div className={styles.timelineCard}>
                <span className={styles.timelineGrade}>{step.grade}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.quoteCard}>
          <p>
            The confidence I gained through singing
            <br />
            didn’t stay on stage.
            <br />
            It followed me everywhere.
          </p>
        </div>
      </section>

      <section className={styles.studySection}>
        <div className={styles.studyGrid}>
          <div className={styles.studyGraphic}>
            <div className={styles.notebookHeader}>
              <span className={styles.notebookDot} />
              <span className={styles.notebookDot} />
              <span className={styles.notebookDot} />
            </div>

            <div className={styles.graphicFlow}>
              <div className={styles.graphicStep}>
                <span className={styles.graphicLabel}>Vocal Training</span>
              </div>
              <div className={styles.arrowDown} aria-hidden="true" />
              <div className={styles.graphicStep}>
                <span className={styles.graphicLabel}>Confidence</span>
              </div>
              <div className={styles.arrowDown} aria-hidden="true" />
              <div className={styles.graphicStep}>
                <span className={styles.graphicLabel}>Self-Expression</span>
              </div>
              <div className={styles.arrowDown} aria-hidden="true" />
              <div className={styles.graphicStep}>
                <span className={styles.graphicLabel}>Identity</span>
              </div>
            </div>
          </div>

          <div className={styles.studyCopy}>
            <p className={styles.kicker}>The Study</p>
            <h2>Understanding how voice shapes development</h2>
            <p>
              Many studies focus on adults, leaving gaps in our understanding of
              adolescent development. The Teen Vocal Initiative is a research
              study that explores how vocal training and performance influence
              teenagers’ confidence and self-expression.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.questionSection}>
        <div className={styles.questionCard}>
          <span className={styles.pin} aria-hidden="true" />
          <p className={styles.questionLabel}>Research Question</p>
          <h2>
            How does vocal training influence confidence and self-expression in
            teenagers?
          </h2>
        </div>
      </section>

      <section className={styles.phasesSection}>
        <div className={styles.phaseBlock}>
          <div className={styles.phaseNumberWrap}>
            <span className={styles.phaseNumber}>01</span>
          </div>

          <div className={styles.phaseContent}>
            <p className={styles.phaseEyebrow}>Phase 1</p>
            <h2>Literature Review</h2>
            <p>
              A literature review that analyzes and synthesizes existing
              research in fields relating to psychology and music education.
              Because the majority of existing research centers around adults
              rather than teens, this phase aims to identify the mental and
              physical reasons why vocal training works.
            </p>
            <p>
              This includes areas like better emotional expression, improved
              mood and stress control, and higher self-confidence.
            </p>

            <div className={styles.tagRow}>
              {phaseOneTags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.impactCard}>
              <p className={styles.impactLabel}>Impact</p>
              <p>
                Instead of simply summarizing studies, this review compares and
                integrates findings to build a foundational framework for
                understanding how vocal experiences shape identity and
                communication.
              </p>
            </div>

            <a
              className={styles.publicationLink}
              href="https://www.curieuxacademicjournal.com/"
              target="_blank"
              rel="noreferrer"
            >
              To be published in the Curieux Academic Journal
            </a>
          </div>
        </div>

        <div className={styles.connectionSection}>
          <div className={styles.connectionLine} aria-hidden="true" />
          <div className={styles.connectionSteps}>
            <span>Literature</span>
            <span>Evidence</span>
            <span>Application</span>
            <span>Impact</span>
          </div>
        </div>

        <div className={`${styles.phaseBlock} ${styles.phaseBlockReverse}`}>
          <div className={styles.phaseContent}>
            <p className={styles.phaseEyebrow}>Phase 2</p>
            <h2>Original Research</h2>
            <p>
              This phase transitions into primary data collection exploring
              original, teen-focused research.
            </p>
            <p>
              It involves gathering data from teen participants through surveys,
              workshops, and longitudinal tracking over time to measure changes
              in self-reported confidence and self-expression tied to vocal
              training and performance experiences.
            </p>

            <div className={styles.tagRow}>
              {phaseTwoTags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.impactCard}>
              <p className={styles.impactLabel}>Impact</p>
              <p>
                This phase tests whether the mechanisms identified in the
                literature review apply in real-world adolescent contexts
                through their application and evolution.
              </p>
            </div>
          </div>

          <div className={styles.phaseNumberWrap}>
            <span className={styles.phaseNumber}>02</span>
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.finalCard}>
          <span className={styles.comingSoonBadge}>
            Coming Soon: Curieux Academic Journal Publication
          </span>

          <h2>
            Together, these phases create
            <br />
            a clearer understanding of how
            <br />
            voice shapes teenage identity,
            <br />
            confidence, and self-expression.
          </h2>
        </div>
      </section>
    </main>
  );
}