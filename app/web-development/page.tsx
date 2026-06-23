 import styles from "./page.module.css";

const technologies = [
  "Next.js",
  "Supabase",
  "Tailwind",
  "DaisyUI",
  "GitHub",
  "Claude",
  "ChatGPT",
];

const stats = [
  {
    number: "10%",
    text: "of teens have encountered predatory behavior online",
  },
  {
    number: "1 in 8",
    text: "kids have experienced sexual exploitation online within a year",
  },
  {
    number: "#2",
    text: "suicide is the second-leading cause of death among ages 10–24 in the US",
  },
];

const solutions = [
  "Gives kids a safe online alternative to social media",
  "Allows kids to express themselves creatively with content creation tools",
  "Encourages confidence and empowerment through technology",
  "Helps teens feel proud of their creations while protected from online hate",
  "Gives parents a digital space they can trust",
  "Builds a community where creativity thrives without negativity",
];

const features = [
  {
    title: "Safe sharing",
    text: "Age-appropriate content sharing built around trust.",
  },
  {
    title: "Positive reactions",
    text: "Encouragement-focused interactions instead of toxic feedback.",
  },
  {
    title: "AI creation tools",
    text: "Creative tools that help kids bring ideas to life.",
  },
  {
    title: "Moderation tools",
    text: "Safety systems designed to protect young users.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroGlowOne} />
        <div className={styles.heroGlowTwo} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Web Development</h1>

          <p className={styles.heroSubtitle}>
            A softer look into the apps, tools, and experiments I’ve built while
            learning how design, product thinking, and technology come together.
          </p>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.browserDots}>
            <span />
            <span />
            <span />
          </div>

          <div className={styles.mockWindow}>
            <div className={styles.mockHeader}>
              <span>idea</span>
              <span>design</span>
              <span>build</span>
            </div>

            <div className={styles.mockMain}>
              <div className={styles.mockCircle} />
              <div>
                <div className={styles.mockLineLong} />
                <div className={styles.mockLineShort} />
              </div>
            </div>

            <div className={styles.mockTiles}>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className={styles.whySection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Why I Build</p>
          <h2>From quitting coding to creating things people can use.</h2>
        </div>

        <div className={styles.storyLayout}>
          <div className={styles.storyRibbon}>
            <span className={styles.ribbonNumber}>01</span>
            <p>
              I started taking coding classes when I was really young, around
              six years old. But I never felt the same passion for programming
              that I had for music or podcasting, so for a while I left it at
              that. I quit coding classes and moved on to things that interested
              me more.
            </p>
          </div>

          <div className={styles.storyRibbonAlt}>
            <span className={styles.ribbonNumber}>02</span>
            <p>
              As I grew up, I started noticing things in everyday life that felt
              like they needed solutions. I kept having ideas for what I could
              build to fix them, but I had no idea how I would actually make any
              of it.
            </p>
          </div>

          <div className={styles.storyRibbon}>
            <span className={styles.ribbonNumber}>03</span>
            <p>
              Then I realized that in this new age of technology and AI, so much
              of building is accessible online now. I started experimenting with
              vibe coding tools while still doing the parts I love: planning,
              design, user thinking, marketing, and storytelling.
            </p>
          </div>

          <div className={styles.pullQuote}>
            <p>
              Now I love web development because I can take a simple idea and
              turn it into something real.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Technologies</p>
          <h2>The tools I use to turn ideas into interactive products.</h2>
        </div>

        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div className={styles.techItem} key={tech}>
              <div className={styles.techIcon}>{index + 1}</div>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="circleup" className={styles.projectSection}>
        <div className={styles.projectHeader}>
          <div>
            <p className={styles.kicker}>Featured Project</p>
            <h2>CircleUp</h2>
          </div>

          <p>
            A youth-centered content-sharing platform designed to help kids
            create, connect, and feel safe online.
          </p>
        </div>

        <div className={styles.projectShowcase}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneNotch} />

            <div className={styles.appCardLarge}>
              <span>CircleUp</span>
              <h3>Create safely.</h3>
              <p>Share with peers your age in a kinder digital space.</p>
            </div>

            <div className={styles.appMiniGrid}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>

          <div className={styles.projectDescription}>
            <h3>What it is</h3>
            <p>
              CircleUp empowers youth aged 8–16 to share content only with
              peers their age, without the fear of bullying or predatory
              behavior. It is built around creativity, safety, and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.challengeSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>The Challenge</p>
          <h2>Online safety is not a small problem.</h2>
        </div>

        <div className={styles.statCloud}>
          {stats.map((stat) => (
            <div className={styles.statBubble} key={stat.number}>
              <strong>{stat.number}</strong>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.solutionSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>The Solution</p>
          <h2>A safer place for young creativity.</h2>
        </div>

        <div className={styles.solutionPath}>
          {solutions.map((solution, index) => (
            <div className={styles.solutionStep} key={solution}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Key Features</p>
          <h2>Designed around protection, creativity, and confidence.</h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <div className={styles.featureMark} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.learnedSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>What I Learned</p>
          <h2>My first app taught me how to think like a builder.</h2>
        </div>

        <div className={styles.notebook}>
          <div className={styles.notePage}>
            <h3>Product Design</h3>
            <p>
              I moved beyond just building features and started thinking from a
              user-centered perspective. I learned how to define a target
              demographic, identify their real problems, and design around their
              needs. This helped me avoid roadblocks and made every feature feel
              more intentional.
            </p>
          </div>

          <div className={styles.notePageAlt}>
            <h3>Technical Growth</h3>
            <p>
              I gained hands-on experience structuring databases and designing
              data models that support smooth user experiences. I also learned
              how to use AI as part of my development process to debug faster,
              solve problems, and turn technical challenges into learning
              moments.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.nextSection}>
        <div className={styles.nextCard}>
          <p className={styles.kicker}>Coming Next</p>
          <h2>A new project is already on the way.</h2>
          <p>
            This summer I will be building an application that encourages
            teenagers like myself to build their own unique voices. Coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}