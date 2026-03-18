// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "qqbot",
		title: "QQBot",
		description:
			"QQ 机器人 Web 管理面板，基于 Vue 3 + Fastify + TypeScript，通过反向 WebSocket 与 NapCat 通信（OneBot V11），支持多 Bot 管理、插件系统、可视化配置、消息记录与统计。",
		image: "",
		category: "web",
		techStack: [
			"TypeScript",
			"Vue 3",
			"Fastify",
			"NapCat",
			"OneBot V11",
			"WebSocket",
		],
		status: "completed",
		sourceCode: "https://github.com/dix8/QQBot",
		startDate: "2026-03-14",
		featured: true,
		tags: ["QQ Bot", "Web Panel", "Plugin System"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
