import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ParticlesContainer from '../components/ParticlesContainer';
import styles from '../styles/Home.module.scss';
import { Badge } from '@nextui-org/react';
import ScrollIcon from '@components/ScrollIcon/ScrollIcon';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className={styles.cajita}>
                <div>
                    <h1 className={styles.title}>JORGE SERRANO</h1>
                    <Badge color="primary" variant="flat" disableOutline>
                        Upcoming
                    </Badge>
                </div>

                <ScrollIcon className={styles.scroll_icon_home} />
            </div>
        </Layout>
    );
};

export default Home;
