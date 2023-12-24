import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
// import { Redis } from "@upstash/redis";
import "../../global.css";


// const redis = Redis.fromEnv();

// export const revalidate = 60;
export default async function ProjectsPage() {

	// const featured = allProjects.find((project) => project.slug === "react")!;
	// const top2 = allProjects.find((project) => project.slug === "flutter")!;
	// const top3 = allProjects.find((project) => project.slug === "nextjs")!;

	// const restOfProjects = allProjects.filter(
	// 	(project) =>
	// 		project.slug !== featured.slug &&
	// 		project.slug !== top2.slug &&
	// 		project.slug !== top3.slug,
	// )


	return (
		<div className="relative pb-16 other-page-fade-in">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						My Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Things I've made, and things I'm working on.
					</p>
				</div>

				{/* Start of featured + top 2 */}
				{/* <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2"> */}
				{/* Featured Project */}
				{/* <Card>
						<Article project={featured} />
					</Card> */}

				{/* End of featured project */}

				{/* Top 2 projects */}

				{/* <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} />
							</Card>
						))}
					</div> */}

				{/* End of top 2 projects */}
				{/* </div> */}
				{/* End of featured + top 2 */}


				{/* Divider Line  - not visible on screens below md*/}
				{/* <div className="hidden w-full h-px md:block bg-zinc-800"></div> */}

				{/* The rest of the projects */}
				<div className="grid grid-cols-2 gap-x-8 gap-y-8 mx-auto">

					{allProjects.map((project) => (
						<Card key={project.slug}>
							<Article project={project} />
						</Card>
					))}

				</div>

				{/* End of the projects */}


			</div>
		</div>
	);
}
