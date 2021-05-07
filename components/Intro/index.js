import styles from './Intro.module.css'

const Intro = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Hi, I’m Siddharth Sinha,</p>
        <p className={styles.myTitle}>
          a web and<br />
          mobile developer
        </p>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vQGUM8qb-B1BGq08rtEX3IqtDf6u3qYaDS_epTm4Z6csUX7xAeXoaUO-7oYU3NWqpozU15P6qqXGWtb/pub">
          <button className={styles.helloButton}>Resume</button>
        </a>
      </div>
      <div className={styles.longOne}>
        <p>
          I’m an India based Full stack developer and designer, working with
          companies worldwide. I’m experienced in <strong>HTML5</strong>
          , <strong>CSS</strong>, <strong>JavaScript/TypeScript</strong>, <strong>Flutter</strong> and modern Frontend libraries and tools{' '}
          <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong> <strong>Next.js </strong>
          and <strong>Gatsby</strong>.
        </p>
        <p>
          Currently working for Build A dev as FullStack JavaScript Curriculum Developer, a non profit
          startup from Ontario Canada.
        </p>
      </div>
    </div>
    <div className={styles.br}></div>
  </>
)

export default Intro
