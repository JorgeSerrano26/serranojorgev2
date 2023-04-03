import type { NextPage } from 'next'
import Layout from '@components/Layout'

const Home: NextPage = () => {
  return <Layout>
    <div className="main_container">
      <div className='container'>
        <h1>
          Hi, I'm <span>George</span>
        </h1>
        <p>
          Software Engineer
        </p>
      </div>
    </div>
  </Layout>
}

export async function getServerSideProps({ req, res }: any) {
  console.log(req.body);
  return { props: {} }
}

export default Home
