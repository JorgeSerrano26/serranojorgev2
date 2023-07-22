import { IconDeviceLaptop, IconSchool } from "@tabler/icons-react";
import { Experience } from "services/ExperienceService";

type TimelineProps = {
	items: Experience[];
};
type TimeLineComponent = (props: TimelineProps) => JSX.Element;

const Timeline: TimeLineComponent = ({ items }) => {
	return (
		<ol className="relative border-l border-gray-200 dark:border-gray-700">
			{items.map((item, index) => {
				const from = new Date(item.from);
				const today = item.to === "today";
				const to = today ? new Date() : new Date(item.to);
				const isLatest = index === 0;
				const isWork = item.type === "work";

				return (
					<li
						key={`timeline-item-${index}`}
						className="ml-6 [&:not(:last-child)]:mb-10"
					>
						<span className="absolute p-0.5 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
							{isWork ? (
								<IconDeviceLaptop color="#93c4fd" />
							) : (
								<IconSchool color="#93c4fd" />
							)}
						</span>
						<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
							{item.title}{" "}
							{isLatest && (
								<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
									Latest
								</span>
							)}
						</h3>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{from.getFullYear()} - {today ? "Today" : to.getFullYear()}
						</time>
						{isWork && item.position && (
							<p className="block mb-2 text-sm font-normal leading-none text-blue-400">
								{item.position}
							</p>
						)}
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
							{item.description}
						</p>
					</li>
				);
			})}
		</ol>
	);
};

export default Timeline;
