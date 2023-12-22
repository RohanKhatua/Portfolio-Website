import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import "../../global.css";


const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {

	const featured = allProjects.find((project) => project.slug === "react")!;
	const top2 = allProjects.find((project) => project.slug === "flutter")!;
	const top3 = allProjects.find((project) => project.slug === "nextjs")!;

	const restOfProjects = allProjects
		
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		

	return (
		<div className="relative pb-16 other-page-fade-in">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Things I've made, and things I'm working on.
					</p>
				</div>
			
				{/* Start of featured + top 2 */}
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
				{/* Featured Project */}	
					<Card>
						{/* The whole project is a link -> clicking anywhere works */}
						<Link href={`projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat("en-US", {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>


										) : (<span>In Progress</span>)}
									</div>
									{/* Ignored views */}
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
									{featured.title}
								</h2>

								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.description}
								</p>

								{/* <div className="mt-10 bottom-4 md:bottom-8">
									<p className=" text-zinc-200 hover:text-zinc-50">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>

								</div> */}
								{/* Clicking on it is intuitive no need for a read more imo */}



							</article>
						</Link>
					</Card>

					{/* End of featured project */}

					{/* Top 2 projects */}

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} />
							</Card>
						))}
					</div>

					{/* End of top 2 projects */}
				</div>
				{/* End of featured + top 2 */}


				{/* Divider Line  - not visible on screens below md*/}
				<div className="hidden w-full h-px md:block bg-zinc-800"></div>
				
				{/* The rest of the projects */}
				{/* Column 1 of the projects  */}
				<div>
					{restOfProjects.filter((_, i)=> i%3===0).map((project)=> (
						<Card key={project.slug}>
							<Article project={project} />
						</Card>
					))}

				</div>

				{/* Column 2 of the projects  */}
				<div>
					{restOfProjects.filter((_, i)=> i%3===1).map((project)=> (
						<Card key={project.slug}>
							<Article project={project} />
						</Card>
					))}
				</div>

				{/* Column 3 of the projects  */}
				<div>
					{restOfProjects.filter((_, i)=> i%3===2).map((project)=> (
						<Card key={project.slug}>
							<Article project={project} />
						</Card>
					))}
				</div>

				{/* End of the rest of the projects */}

				
			</div>
		</div>
	);
}
