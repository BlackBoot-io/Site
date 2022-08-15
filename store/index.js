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
					icon: require('../static/img/icons/wallet.svg?raw'),
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
					title: "Proof of Attendance",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Academia",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Digital Identity",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Music NFTs",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "university Certificate",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Health Care",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Private Club Membership",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
		{
			title: "Developers",
			route: "",
			icon: "mdi-layers-outline",
			description: "Technical documentation, SDK libraries and specifications for all Crypto APIs endpoints.",
			links: [
				{
					title: "Technical Documentation",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Glossary",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Guides",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Product Updates",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Product Status",
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
			titleSide: "Social",
			route: "",
			icon: "mdi-layers-outline",
			linkItems: [
				{
					title: "Github",
					route: "https://github.com/BlackBoot-io",
				},
				{
					title: "Discord",
					route: "https://discord.gg/ncrq7CXZ",
				},
			],
			links: [
				{
					title: "Why Avanod APIs",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Security",
					route: "#",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
				{
					title: "Our team",
					route: "/team",
					icon: require('../static/img/icons/wallet.svg?raw'),
				},
			]
		},
	],
})
