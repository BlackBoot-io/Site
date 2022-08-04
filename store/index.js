export const state = () => ({
	title: "Avanod", 
	description: "Avanod",
	cPrimary: '#412971',
	cSecondary: '#1d2a3b',
	menu: [
		{
			name: "Language",
			route: "#",
			icon: "mdi-chart-box-outline",
			items: [
				{
					name: "United Kingdom",
					route: "#uk",
				},
				{
					name: "United Arab Emirates",
					route: "#uae",
				},
			]
		},
		{
			name: "Home",
			route: "/",
			icon: "mdi-home-outline",
		},
		{
			name: "Services",
			route: "/#services",
			icon: "mdi-layers-outline",
		},
		{
			name: "Token",
			route: "/#details",
			icon: "mdi-circle-multiple-outline",
		},
		{
			name: "Roadmap",
			route: "/#roadmap",
			icon: "mdi-map-marker-path",
		},
		{
			name: "Our Team",
			route: "/team",
			icon: "mdi-account-group-outline",
		},
	],
})
