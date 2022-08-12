export const state = () => ({
	title: "Avanod", 
	description: "Avanod",
	cPrimary: '#412971',
	cSecondary: '#1d2a3b',
	menu: [
		{
			title: "Language",
			route: "#",
			icon: "mdi-chart-box-outline",
			links: [
				{
					title: "United Kingdom",
					route: "#",
				},
				{
					title: "United Arab Emirates",
					route: "#",
				},
			]
		},
		{
			title: "Home",
			route: "/",
			icon: "mdi-home-outline",
		},
		{
			title: "Products",
			route: "",
			icon: "mdi-layers-outline",
			items: [
				"Established tech stack, tools & standards",
				"Enterprise adoption and integration",
				"Tailored execution environments",
			],
			links: [
				{
					title: "NFT as a Service",
					description: "Using NFT infrustructure for managing assets.",
					route: "/uk",
					icon: require('../static/img/icons/lang.svg?raw'),
				},
				{
					title: "Online Events",
					description: "A proven record for experience and expertiese.",
					route: "/uae",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
		{
			title: "Services",
			route: "/#services",
			icon: "mdi-layers-outline",
		},
		{
			title: "Token",
			route: "/#details",
			icon: "mdi-circle-multiple-outline",
		},
		{
			title: "Roadmap",
			route: "/#roadmap",
			icon: "mdi-map-marker-path",
		},
		{
			title: "Our Team",
			route: "/team",
			icon: "mdi-account-group-outline",
		},
	],
})
