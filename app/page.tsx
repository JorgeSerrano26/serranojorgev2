import FloatingMenu from "@components/FloatingMenu/FloatingMenu";
import ScrollIcon from "@components/ScrollIcon/ScrollIcon";
import Timeline from "@components/Timeline/Timeline";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import ExperienceService from "services/ExperienceService";

const getData = () => {
	return ExperienceService.getExperience();
};

const Home: NextPage = async () => {
	const dataExperience = await getData();

	return (
		<main>
			<FloatingMenu
				items={[
					{
						href: "https://github.com/JorgeSerrano26",
						icon: "github",
						ariaLabel: "jorge serrano github",
					},
					{
						href: "twitch.tv/jorgeserrano",
						icon: "twitch",
						ariaLabel: "jorge serrano twitch",
						disabled: true,
					},
					{
						href: "https://www.linkedin.com/in/jorge-serrano-a6b627162/",
						icon: "linkedin",
						ariaLabel: "jorge serrano linkedin",
					},
				]}
			/>
			<div className="flex flex-row relative top-0 left-0 justify-center items-center w-100 h-screen text-center">
				<div>
					<h1 className="text-6xl font-semibold mb-2">JORGE SERRANO</h1>
					<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
						UNDER DEVELOPING
					</span>
				</div>
				<ScrollIcon className="top-[99%] translate-y-[-50%]" />
			</div>
			<div className="relative hidden md:block">
				<div className="absolute left-0 top-[-400px]">
					<Image src="/home-purple.svg" priority width={271} height={688} />
				</div>
				<div className=" absolute right-0">
					<Image src="/home-green.svg" width={271} priority height={688} />
				</div>
			</div>
			{/* Experience */}
			<section
				id="experience"
				className="w-[70%] md:w-60% max-w-screen-md m-auto pt-20 pb-20"
			>
				<div className="text-center">
					<h1 className="inline-block z-10 relative text-4xl font-semibold mb-10 after:content-[''] after:w-full after:h-3 after:block after:absolute after:bg-fuchsia-500 after:top-[75%] after:z-[-1]">
						Experience
					</h1>
				</div>
				<Timeline items={dataExperience} />
			</section>
		</main>
	);
};

export default Home;
