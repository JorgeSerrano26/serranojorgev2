import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Timeline, { TimelineProps } from '@components/Timeline/Timeline';
import data from './data.json';

const list = data as TimelineProps['list'];

const Home: NextPage = () => {
    return (
        <Layout>
            <div>
                <Timeline list={list} />
            </div>
        </Layout>
    );
};

export default Home;
