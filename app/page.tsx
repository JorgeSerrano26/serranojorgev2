import Alert from "@components/Alert";
import FloatingMenu, {
	type FloatingMenuProps,
} from "@components/FloatingMenu/FloatingMenu";
import ScrollIcon from "@components/ScrollIcon/ScrollIcon";
import Section from "@components/Section/Section";
import Timeline from "@components/Timeline/Timeline";
import type { NextPage } from "next";
import ExperienceService from "services/ExperienceService";

import { IconDownload } from "@tabler/icons-react";

import floatingsItems from "services/data/floatingItems.json";
import techonologies from "services/data/technologies.json";

const getData = () => {
	return ExperienceService.getExperience();
};

const Home: NextPage = async () => {
	const dataExperience = await getData();

	return (
		<main>
			<FloatingMenu items={floatingsItems as FloatingMenuProps["items"]} />
			<div id="home" className="top-0 left-0 w-100 h-screen pt-20">
				<div className="container m-auto grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-2 place-items-center ">
					{/* INFO */}
					<div className="grid grid-rows-2 md:grid-rows-3 col-start-1">
						<div className="place row-start-1 row-end-4">
							<h1 className="text-6xl font-semibold mb-2 d-inline text-center">
								JORGE SERRANO
							</h1>
							<Alert />
							<div className="flex justify-center mt-10">
								<a
									href="/jorge_serrano_cv.pdf"
									className="animate-bounce text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									download
								>
									<IconDownload className="mr-2" />
									Download cv
								</a>
							</div>
						</div>
					</div>
					{/* IMAGE */}
					<div className="flex justify-center relative md:col-start-2 row-start-2 row-end-4 md:row-start-1 md:row-end-1">
						<img
							src="/me.webp"
							width={698}
							height={766}
							className="w-[70%] md:w-full"
							alt="Jorge Serrano"
							fetchPriority="high"
						/>
					</div>
				</div>
				<ScrollIcon className="top-[99%] translate-y-[-50%]" />
			</div>
			{/* WAVES */}
			<div className="relative hidden md:block">
				<div className="absolute left-0 top-[-400px]">
					<img
						src="/home-purple.svg"
						fetchPriority="high"
						width={271}
						height={688}
						alt="Home purple XPR home"
					/>
				</div>
				<div className=" absolute right-0">
					<img
						src="/home-green.svg"
						width={271}
						fetchPriority="high"
						height={688}
						alt="Home green XPR home"
					/>
				</div>
			</div>

			{/* Experience */}
			<Section id="experience" title="Experience">
				<Timeline items={dataExperience} />
			</Section>
			{/* Technologies */}
			<Section id="technologies" title="Technologies">
				<div className="mt-10 p-5 shadow-lg shadow-gray rounded-md bg-gray-700 border-gray-600">
					<div className="mb-10">
						<h3 className="font-bold mb-5">
							<span role="img" aria-label="rocket emoji">
								🚀
							</span>
							Learned
						</h3>

						<div className="flex w-auto flex-wrap gap-5">
							{techonologies.learned.map((tech, index) => {
								return (
									<div
										key={`tech-${index}-${tech.name}`}
										className="flex group relative p-2 rounded-full bg-slate-50 w-[50px] h-[50px] flex-shrink-0 flex-grow-0 flex-auto  justify-center items-center text-base font-bold"
									>
										<img
											className="w-full rounded-md"
											alt={`${tech.name} logo`}
											src={`/logos/${tech.logo}`}
											fetchPriority="low"
											width={50}
											height={50}
										/>
										<div className="absolute top-[110%] w-max z-10 shadow transform-translate-x-1/2 px-2 py-1 bg-gray-50 text-gray-800 text-sm rounded opacity-0 group-hover:opacity-100">
											{tech.name}
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3 className="font-bold mb-5">
							<span role="img" aria-label="Nerd Face emoji">
								🤓
							</span>
							Learning
						</h3>
						<div className="flex w-auto flex-wrap gap-5">
							{techonologies.learning.map((tech, index) => {
								return (
									<div
										key={`tech-${index}-${tech.name}`}
										className="flex p-2 relative group rounded-full bg-slate-50 w-[50px] h-[50px] flex-shrink-0 flex-grow-0 flex-auto justify-center items-center text-base font-bold"
									>
										<img
											className="w-full h-fit"
											alt={`${tech.name} logo`}
											src={`/logos/${tech.logo}`}
											fetchPriority="low"
											width={50}
											height={50}
										/>
										<div className="absolute top-[110%] w-max z-10 shadow transform-translate-x-1/2 px-2 py-1 bg-gray-50 text-gray-800 text-sm rounded opacity-0 group-hover:opacity-100">
											{tech.name}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
};

export default Home;
