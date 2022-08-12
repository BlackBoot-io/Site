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
					route: "#uk",
				},
				{
					title: "United Arab Emirates",
					route: "#uae",
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
					route: "#",
					icon: require('../static/img/icons/lang.svg?raw'),
				},
				{
					title: "Online Events",
					description: "A proven record for experience and expertiese.",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
		{
			title: "Use Cases",
			route: "",
			icon: "mdi-layers-outline",
			description: "We help businesses and institutions take part in the Web3 ecosystem.",
			links: [
				{
					title: "NFT as a Service",
					description: "Using NFT infrustructure for managing assets.",
					route: "#",
					icon: require('../static/img/icons/lang.svg?raw'),
				},
				{
					title: "Online Events",
					description: "A proven record for experience and expertiese.",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
		{
			title: "Developers",
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
					route: "#",
					icon: require('../static/img/icons/lang.svg?raw'),
				},
				{
					title: "Online Events",
					description: "A proven record for experience and expertiese.",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
		{
			title: "Invest us",
			route: "/invest-us",
			icon: "mdi-layers-outline",
		},
		{
			title: "Pricing",
			route: "/pricing",
			icon: "mdi-layers-outline",
		},
		{
			title: "About Us",
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
					route: "#",
					icon: require('../static/img/icons/lang.svg?raw'),
				},
				{
					title: "Online Events",
					description: "A proven record for experience and expertiese.",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
	],
})
