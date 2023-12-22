import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
	title: "Rohan Khatua Portfolio",
	description: "Rohan Khatua's Portfolio",
	applicationName: "Rohan Khatua Portfolio",
	keywords: ["Rohan", "Khatua", "Portfolio", "Rohan Khatua", "Rohan Khatua Portfolio"],
	category: "Portfolio",
	classification: "Portfolio",
	creator: "Rohan Khatua",
	robots: "index, follow",
	abstract: "Rohan Khatua's Portfolio",
	archives: "Rohan Khatua's Portfolio",
	authors: {
		name: "Rohan Khatua",
		url: "https://www.linkedin.com/in/rohankhatua/",
	},
	colorScheme: "dark light",
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://rohankhatua.dev",
		title: "Rohan Khatua Portfolio",
		description: "Rohan Khatua's Portfolio",
		countryName: "India",
	},
	themeColor: "#000000",
}

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
			</head>
			<body className="bg-black">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
