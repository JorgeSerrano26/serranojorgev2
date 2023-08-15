"use client";

import { IconArrowBigUpFilled } from "@tabler/icons-react";
import classNames from "classnames";
import { useEffect, useState } from "react";
const ScrollToTop = () => {
	const [scrollY, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY);
		});

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	const handleOnClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const classes = classNames(
		"text-white bg-blue-700 font-medium rounded-md text-sm p-2.5 text-center mr-2 mb-2 fixed right-1 bottom-1 z-50 shadow-sm",
		{ hidden: scrollY < 100 },
		{ block: scrollY > 100 },
	);

	return (
		<button onClick={handleOnClick} type="button" className={classes}>
			<IconArrowBigUpFilled />
		</button>
	);
};

export default ScrollToTop;
