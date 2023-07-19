import FloatingMenu from "@components/FloatingMenu/FloatingMenu";
import Layout from "@components/Layout";
import ScrollIcon from "@components/ScrollIcon/ScrollIcon";
import { Badge } from "@nextui-org/react";
import styles from "@styles/Home.module.scss";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/legacy/image";
import ExperienceService, {
	Experience,
	Project,
} from "services/ExperienceService";

type Props = {
	experience: Experience[];
	projects: Project[];
};

const Home: NextPage<Props> = ({ projects }) => {
	return (
		<Layout>
			<FloatingMenu
				items={[
					{
						href: "https://github.com/JorgeSerrano26",
						icon: "github",
						ariaLabel: "jorge github",
					},
					{
						href: "twitch.tv/jorgeserrano",
						icon: "twitch",
						ariaLabel: "jorge twitch",
						disabled: true,
					},
					{
						href: "https://www.linkedin.com/in/jorge-serrano-a6b627162/",
						icon: "linkedin",
						ariaLabel: "jorge linkedin",
					},
				]}
			/>
			<div className={styles.cajita}>
				<div>
					<h1 className={`${styles.title} text-6xl font-semibold mb-2`}>
						JORGE SERRANO
					</h1>
					<Badge color="primary" variant="flat" disableOutline enableShadow>
						UNDER DEVELOPING
					</Badge>
				</div>
				<ScrollIcon className={styles.scroll_icon_home} />
			</div>
			<div className="relative hidden md:block h-[1000px]">
				<div className="absolute left-0 top-[-400px] z-[0]">
					<Image src="/home-purple.svg" priority width={271} height={688} />
				</div>
				<div className=" absolute right-0 z-[-1]">
					<Image src="/home-green.svg" width={271} priority height={688} />
				</div>
			</div>
			{/* <section id="projects" className='pt-8 pb-8'>
                <Container>
                    <h2 className="text-5xl font-semibold text-center mt-3 mb-3">PROJECTS</h2>
                    <Grid.Container gap={2} justify="center">
                        {
                            projects.map((project, index) => {
                                return <Grid xs={12} sm={4} key={`project-${index}-${project.title.trim()}`}>
                                    <ProjectCard {...project} />
                                </Grid>
                            })
                        }
                    </Grid.Container>
                </Container>
            </section> */}
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps<Props, {}, {}> = async (
	context,
) => {
	const [experience, projects] = await Promise.all([
		ExperienceService.getExperience(),
		ExperienceService.getProjects(),
	]);

	return {
		props: {
			experience,
			projects,
		},
	};
};

export default Home;
