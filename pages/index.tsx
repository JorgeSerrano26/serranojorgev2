import type { NextPage } from 'next'
import Layout from '../components/Layout'
import ParticlesContainer from '../components/ParticlesContainer'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return <Layout>
    <div className={styles.cajita}>
      <div>
        <h1 className={styles.title}>JORGE SERRANO</h1>
        <h2 className={styles.title}>Upcoming</h2>
      </div>
      <ParticlesContainer />
    </div>
  </Layout>
}

export default Home
