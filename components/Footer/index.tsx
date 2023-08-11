import classNames from "classnames";
const Footer = () => {
	const footerClassnames = classNames("pt-3 pb-3 relative bg-blue-50 z-10");

	return (
		<footer className={footerClassnames}>
			<p className="font-bold text-center z-10 text-gray-900">
				Made with{" "}
				<span role="img" aria-label="Coffee icon">
					☕
				</span>{" "}
				&{" "}
				<span role="img" aria-label="White heart">
					🤍
				</span>
			</p>
			<p className="font-bold text-center text-gray-900 text-sm">
				Some illustrations by{" "}
				<a
					className="text-purple-600"
					href="https://icons8.com/illustrations/author/GrbQqWBEhaDS"
				>
					Liam Moore
				</a>
			</p>
		</footer>
	);
};

export default Footer;
