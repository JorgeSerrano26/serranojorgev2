type SectionProps = {
	id: string;
	title: string;
	children?: React.ReactNode;
	className?: string;
};

const Section = ({ id, title, children, className }: SectionProps) => {
	return (
		<section id={id} className={className}>
			<div className="w-[70%] md:w-60% max-w-screen-md m-auto pt-20 pb-20">
				<div className="text-center">
					<h2 className="capitalize inline-block z-10 relative text-4xl font-semibold mb-10 after:content-[''] after:w-full after:h-3 after:block after:absolute after:bg-fuchsia-500 after:top-[75%] after:z-[-1]">
						{title}
					</h2>
				</div>
				{children}
			</div>
		</section>
	);
};

export default Section;
