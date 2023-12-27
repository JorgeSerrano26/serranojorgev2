import Footer from "@components/Footer";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";

export const metadata: Metadata = {
	title: "Jorge Serrano - Software Engineer",
	description: "I'am developer and this is my personal page.",
	authors: [{ name: "Jorge Serrano" }],
	creator: "Jorge Serrano",
	keywords: [
		"developer",
		"portfolio",
		"react",
		"css",
		"scss",
		"kotlin",
		"java",
		"go",
		"docker",
		"senior",
		"semi senior",
		"junior",
		"figma",
	],
	robots: "index,follow",
	classification: "Personal",
	category: "Porfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
				<link
					rel="apple-touch-icon"
					href="/favicons/apple-touch-icon"
					type="image/png"
					sizes="180x180"
				/>
			</Head>
			<body className="relative h-full w-full bg-slate-950 overflow-x-hidden">
				<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
				<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
