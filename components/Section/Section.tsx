import styles from "./styles.module.scss";

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
					<h2
						className={`inline-block z-10 relative text-5xl md:text-7xl lg:text-9xl font-bold mb-10 uppercase bg-clip-text tracking-1 text-pinky ${styles.title}`}
					>
						{title}
					</h2>
				</div>
				{children}
			</div>
		</section>
	);
};

export default Section;
