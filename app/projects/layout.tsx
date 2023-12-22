export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="other-page-fade-in relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
			{children}
		</div>
	);
}
