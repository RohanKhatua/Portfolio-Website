import type { Project } from "@/.contentlayer/generated";
// import Link from "next/link";
// import { Eye, View } from "lucide-react";
import { Github } from "lucide-react";

type Props = {
	project: Project;

};

// Article component shows the project box
export const Article: React.FC<Props> = ({ project }) => {
	return (
		<article className="p-4 md:p-8 justify-evenly">
			{/* Start of Date element */}
			<div className="flex justify-between gap-2 items-center mb-2">
				<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
					{project.date ? (
						<time dateTime={new Date(project.date).toISOString()}>
							{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
								new Date(project.date),
							)}
						</time>
					) : (
						<span>In Progress</span>
					)}
				</span>
			</div>
			{/* End of Date element */}
			<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
				{project.title}
			</h2>
			<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
				{project.description}
			</p>
			{/* Add a github link */}
			<div className="flex items-center mt-4">
				<a
					href={project.url ? project.url : ""}
					target="_blank"
					rel="noopener noreferrer"
					className="text-zinc-200 hover:text-zinc-50">
					<Github size={24} strokeWidth={2} />
				</a>
			</div>
		</article>

	);
};
