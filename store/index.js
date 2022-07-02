export const state = () => ({
	title: "Black Boot", 
	description: "Black Boot",
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
