import SEO from '../SEO'
import WorkList from '../WorkList'
import styles from './Home.module.css'

const Home = () => (
  <div className={styles.home}>
    <SEO
      title="Siddharth Sinha | Portfolio"
      description="Portfolio of Siddharth Sinha, a web developer and mobile devloper"
    />
    <WorkList />
  </div>
)

export default Home
