const Alert = () => {
	return (
		<div
			id="alert-4"
			className="flex items-center w-[90%] m-auto md:w-full p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
			role="alert"
		>
			<span role="img" className="animate-ping">
				🚨
			</span>
			<div className="ml-3 text-sm font-medium">
				This page is under construction
			</div>
			<span className="sr-only">Info</span>
		</div>
	);
};

export default Alert;
