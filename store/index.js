export const state = () => ({
	title: "Black Boot", 
	description: "Black Boot",
	cPrimary: '#412971',
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
			route: "#futures",
			icon: "mdi-circle-multiple-outline",
		},
		{
			name: "Services",
			route: "#services",
			icon: "mdi-layers-outline",
		},
		{
			name: "Roadmap",
			route: "#roadmap",
			icon: "mdi-map-marker-path",
		},
		{
			name: "Our Team",
			route: "#1",
			icon: "mdi-account-group-outline",
		},
	],
})
