export const buffetData = {
	allMeatSpots: [
		{
			type: "meatSpot",
			value: "medium",
			description: "ao ponto",
			overviewDescription: "Hamburguer ao ponto",
		},
		{
			type: "meatSpot",
			value: "well done",
			description: "bem passado",
			overviewDescription: "Hamburguer bem passado",
		},
	],

	allBreads: [
		//{ value: "empty", type: "bread", selectDescription: "*selecione o pão" },
		{
			type: "bread",
			value: "integral",
			description: "integral",
			overviewDescription: "pão integral",
		},
		{
			type: "bread",
			value: "brioche",
			description: "de brioche",
			overviewDescription: "pão de brioche",
		},
	],

	allBurgers: [
		//{ value: "empty", type: "burger", selectDescription: "*selecione o hamburger" },
		{
			type: "burger",
			value: "carne90",
			description: "carne 90g",
			overviewDescription: "90g de hamburguer de carne",
			price: 13,
		},
		{
			type: "burger",
			value: "carne180",
			description: "carne 180g",
			overviewDescription: "180g de hamburguer de carne",
			price: 17,
		},
		{
			type: "burger",
			value: "veg90",
			description: "vegetariano 90g",
			overviewDescription: "90g de hamburguer vegetariano",
			price: 11,
		},
		{
			type: "burger",
			value: "veg180",
			description: "vegetariano 180g",
			overviewDescription: "180g de hamburguer vegetariano",
			price: 15,
		},
	],

	allCheeses: [
		//{ value: "empty", type: "cheese", selectDescription: "selecione o queijo" },
		{
			type: "cheese",
			value: "cheddar",
			description: "cheddar",
			overviewDescription: "queijo cheddar",
		},
		{
			type: "cheese",
			value: "mussarela",
			description: "mussarela",
			overviewDescription: "queijo mussarela",
		},
		{
			type: "cheese",
			value: "prato",
			description: "prato",
			overviewDescription: "queijo prato",
		},
	],

	allExtras: [
		{
			type: "extra",
			value: "maionese-verde",
			description: "maionese verde",
			price: 3,
		},
		{ type: "extra", value: "bacon", description: "bacon", price: 4 },
		{ type: "extra", value: "ovo", description: "ovo", price: 2 },
		{ type: "extra", value: "tomate", description: "tomate", price: 0.75 },
		{ type: "extra", value: "alface", description: "alface", price: 0.5 },
		{ type: "extra", value: "barbecue", description: "barbecue", price: 1.5 },
		{
			type: "extra",
			value: "molhoCheddar",
			description: "cascata de molho cheddar",
			price: 4,
		},
	],
}
