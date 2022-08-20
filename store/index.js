export const state = () => ({
	title: "Avanod", 
	description: "Avanod",
	cPrimary: '#020d1c',
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
					icon: require('../static/img/flags/uk.svg?raw'),
				},
				{
					title: "United Arab Emirates",
					route: "#uae",
					icon: require('../static/img/flags/uae.svg?raw'),
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
					icon: require('../static/img/icons/menu/nft-as-a-service.svg?raw'),
				},
				{
					title: "Online Events",
					description: "A proven record for experience and expertiese.",
					route: "#",
					icon: require('../static/img/icons/menu/online-events.svg?raw'),
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
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/proof-of-attendance.svg?raw'),
				},
				{
					title: "Academia",
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/academia.svg?raw'),
				},
				{
					title: "Digital Identity",
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/digital-identity.svg?raw'),
				},
				{
					title: "Music NFTs",
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/music-nfts.svg?raw'),
				},
				{
					title: "University Certificate",
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/university-certificate.svg?raw'),
				},
				{
					title: "Health Care",
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/health-care.svg?raw'),
				},
				{
					title: "Private Club Membership",
					route: "/use-cases/",
					icon: require('../static/img/icons/menu/private-club-membership.svg?raw'),
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
					icon: require('../static/img/icons/menu/technical-documentation.svg?raw'),
				},
				{
					title: "Glossary",
					route: "#",
					icon: require('../static/img/icons/menu/glossary.svg?raw'),
				},
				{
					title: "Guides",
					route: "#",
					icon: require('../static/img/icons/menu/guides.svg?raw'),
				},
				{
					title: "Product Updates",
					route: "#",
					icon: require('../static/img/icons/menu/product-updates.svg?raw'),
				},
				{
					title: "Product Status",
					route: "#",
					icon: require('../static/img/icons/menu/product-status.svg?raw'),
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
					icon: require('../static/img/icons/menu/why-avanod-apis.svg?raw'),
				},
				{
					title: "Security",
					route: "#",
					icon: require('../static/img/icons/menu/security.svg?raw'),
				},
				{
					title: "Our Team",
					route: "/team",
					icon: require('../static/img/icons/menu/our-team.svg?raw'),
				},
			]
		},
	],
})
