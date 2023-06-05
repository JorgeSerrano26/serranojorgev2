import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Layout from '@components/Layout';
import ScrollBar from '@components/ScrollBar/ScrollBar';
import styles from '@styles/Home.module.scss';
import { Badge, Container } from '@nextui-org/react';
import ScrollIcon from '@components/ScrollIcon/ScrollIcon';
import ExperienceService, { Experience, Project } from 'services/ExperienceService';
import { Grid } from '@nextui-org/react';
import ProjectCard from '@components/ProjectCard';

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

type Props = {
    experience: Experience[];
    projects: Project[];
}

const Home: NextPage<Props> = ({ projects }) => {

    return (
        <Layout>
            <ScrollBar />
            <div className={styles.cajita}>
                <div>
                    <h1 className={`${styles.title} text-6xl font-semibold mb-2`}>JORGE SERRANO</h1>
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
            <section id="projects" className='pt-8 pb-8'>
                <Container>
                    <h2 className="text-5xl font-semibold text-center mt-3 mb-3">PROJECTS</h2>
                    <Grid.Container gap={2} justify="center">
                        {
                            projects.map((project, index) => {
                                return <Grid xs={12} sm={4}>
                                    <ProjectCard key={`project-${index}-${project.title.trim()}`} {...project} />
                                </Grid>
                            })
                        }
                    </Grid.Container>
                </Container>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps<Props, any, any> = async (context) => {
    const [experience, projects] = await Promise.all([
        ExperienceService.getExperience(),
        ExperienceService.getProjects()]);

    return {
        props: {
            experience,
            projects
        }
    }
}

export default Home;
