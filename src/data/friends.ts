// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Ac",
		imgurl: "https://avatars.githubusercontent.com/u/36359363?v=4&s=640",
		desc: "分享技术与有趣内容的个人主页",
		siteurl: "https://kek1.cn",
		tags: ["Personal", "Tech"],
	},
	{
		id: 2,
		title: "Betsy Blog",
		imgurl: "https://img.micostar.cc/images/avatar.webp",
		desc: "爱我所爱，我们是彼此永远的动力",
		siteurl: "https://www.micostar.cc",
		tags: ["Blog", "Friend"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
