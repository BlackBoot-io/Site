export const state = () => ({
	title: "Black Boot", 
	description: "Black Boot",
	cPrimary: '#545cf5',
	cSecondary: '#1d2a3b',
	menu: [
		{
			name: "Home",
			route: "/",
			icon: "mdi-home-outline",
		},
		// {
		// 	name: "وضعیت بازار",
		// 	route: "#",
		// 	icon: "mdi-chart-box-outline",
		// 	items: [
		// 		{
		// 			name: "بیت کوین",
		// 			route: "btc",
		// 		},
		// 		{
		// 			name: "اتریوم",
		// 			route: "eth",
		// 		},
		// 		{
		// 			name: "سایر ارز های دیجیتال",
		// 			route: "crypto",
		// 		},
		// 	]
		// },
		{
			name: "Token",
			route: "#1",
			icon: "mdi-currency-usd",
		},
		{
			name: "Services",
			route: "#2",
			icon: "mdi-comment-text-multiple-outline",
		},
		{
			name: "Roadmap",
			route: "#3",
			icon: "mdi-lifebuoy",
		},
		{
			name: "Our team",
			route: "#4",
			icon: "mdi-information-outline",
		},
	],
})
