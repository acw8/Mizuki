import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "university-study",
		title: "大学学习",
		description:
			"从 2025 年 9 月开始进入大学阶段，继续围绕计算机、软件开发和项目实践进行学习，也持续把折腾过程和技术记录沉淀下来。",
		type: "education",
		startDate: "2025-09-01",
		skills: ["JavaScript", "TypeScript", "Python", "Java", "MySQL"],
		achievements: [
			"进入新的学习阶段并继续保持技术积累",
			"持续接触项目开发、工具链和工程化内容",
			"把学习内容逐步转化为项目和文章输出",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "qqbot-project",
		title: "QQBot 管理面板",
		description:
			"一个面向 QQ 机器人的 Web 管理面板项目，围绕 Bot 管理、插件扩展、可视化配置、消息记录与统计等功能持续打磨。",
		type: "project",
		startDate: "2026-03-14",
		skills: [
			"TypeScript",
			"Vue 3",
			"Fastify",
			"NapCat",
			"OneBot V11",
			"WebSocket",
		],
		achievements: [
			"完成项目主体功能并进入持续迭代阶段",
			"实现多 Bot 管理、插件系统与配置面板",
			"接入 NapCat 与 OneBot V11 通信链路",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/dix8/QQBot",
				type: "project",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "junior-college-study",
		title: "专科学习",
		description:
			"在专科学习阶段逐步建立起对计算机和软件开发的系统认识，也是在这段时间里开始把兴趣转成更持续的学习和实践。",
		type: "education",
		startDate: "2022-09-01",
		endDate: "2025-06-30",
		skills: [
			"JavaScript",
			"TypeScript",
			"Python",
			"Java",
			"HTML/CSS",
			"MySQL",
		],
		achievements: [
			"逐步建立前后端和数据库的基础认知",
			"开始把学习和实践结合到一起",
			"形成持续折腾技术的习惯",
		],
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "high-school-study",
		title: "高中学习",
		description:
			"高中阶段完成基础学业，也是在这一时期逐渐开始接触计算机和编程相关内容，为后续继续学习技术打下了起点。",
		type: "education",
		startDate: "2019-09-01",
		endDate: "2022-06-30",
		skills: ["基础学科", "计算机兴趣", "自主学习"],
		achievements: [
			"完成高中阶段学习",
			"逐渐建立对计算机方向的兴趣",
			"为后续技术学习做准备",
		],
		icon: "material-symbols:history-edu",
		color: "#EA580C",
	},
];
