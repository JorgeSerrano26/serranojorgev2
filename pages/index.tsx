import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Layout from '../components/Layout';
import ScrollBar from '@components/ScrollBar/ScrollBar';
import styles from '../styles/Home.module.scss';
import { Badge } from '@nextui-org/react';
import ScrollIcon from '@components/ScrollIcon/ScrollIcon';
import ExperienceService from 'services/ExperienceService';

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

type Props = {
}

const Home: NextPage<Props> = () => {

    return (
        <Layout>
            <ScrollBar />
            <div className={styles.cajita}>
                <div>
                    <h1 className={styles.title}>JORGE SERRANO</h1>
                    <Badge color="primary" variant="flat" disableOutline enableShadow>
                        DEVELOPING
                    </Badge>
                    <div className={styles.contact}>
                        <a className={styles.link} href="https://github.com/JorgeSerrano26" rel="noreferrer" target="_blank"><IconBrandGithub /></a>
                        <a className={styles.link} href="https://www.linkedin.com/in/jorge-serrano-a6b627162/" rel="noreferrer" target="_blank"><IconBrandLinkedin /></a>
                    </div>
                </div>

                <ScrollIcon className={styles.scroll_icon_home} />
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps<Props, any, any> = async (context) => {
    const experience = await ExperienceService.getExperience()

    return {
        props: {
            experience
        }
    }
}

export default Home;
