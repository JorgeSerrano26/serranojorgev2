type Tech = {
	name: string;
	logo: string;
};

type Props = {
	learned?: Tech[];
	learning?: Tech[];
};

const TechTitle = ({
	icon,
	children,
}: { icon: string; children: React.ReactNode }) => {
	return (
		<h3 className="font-bold mb-5">
			<span role="img" aria-label="rocket emoji" className="mr-1">
				{icon}
			</span>
			{children}
		</h3>
	);
};

const TechItem = ({ name, logo }: Tech) => {
	return (
		<div className="relative group">
			<div className="flex hover:scale-110 duration-100 z-0 relative p-2 rounded-full bg-slate-50 w-[50px] h-[50px] flex-shrink-0 flex-grow-0 flex-auto  justify-center items-center">
				<img
					className="w-full rounded-md"
					alt={`${name} logo`}
					src={`/logos/${logo}`}
					fetchPriority="low"
					width={50}
					height={50}
				/>
			</div>
			<div className="font-bold absolute top-[110%] w-max max-w-[150px] text-center z-10 shadow left-[50%] translate-x-[-50%] px-2 py-1 bg-gray-50 text-gray-800 text-sm rounded opacity-0 group-hover:opacity-100">
				{name}
			</div>
		</div>
	);
};

const Techonologies = ({ learned, learning }: Props) => {
	return (
		<div className="mt-10 p-5 shadow-sm shadow-slate-700 rounded-xl bg-gray-700 border-gray-600 relative">
			<img
				src="/rocket.png"
				alt=""
				className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]"
				width={100}
				height={100}
			/>
			{learned && (
				<div className="mb-10">
					<TechTitle icon="🚀">Learned</TechTitle>

					<div className="flex w-auto flex-wrap gap-5 gap-y-10">
						{learned.map((tech, index) => {
							const key = `tech-${index}-${tech.name}`;
							return <TechItem key={key} {...tech} />;
						})}
					</div>
				</div>
			)}
			{learning && (
				<div>
					<TechTitle icon="🤓">Learning</TechTitle>
					<div className="flex w-auto flex-wrap gap-5 gap-y-10">
						{learning.map((tech, index) => {
							const key = `tech-${index}-${tech.name}`;
							return <TechItem key={key} {...tech} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default Techonologies;
