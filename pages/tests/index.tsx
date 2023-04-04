import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Timeline from '@components/Timeline/Timeline';

const Home: NextPage = () => {
    return (
        <Layout>
            <div>
                <Timeline />
            </div>
        </Layout>
    );
};

export default Home;
