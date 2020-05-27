export const buffetData = {
    
    allMeatSpots: [ 
        { type:'meatSpot', value: 'medium', description: 'hamburger ao ponto' },
        { type:'meatSpot', value: 'well done', description: 'hamburger bem passado' }, 
    ],
    
    allBreads: [ 
        { value:'empty', type: 'bread', selectDescription: '*selecione o pão' },
        { type: 'bread', value: 'integral', description: 'pão integral', selectDescription: 'pão integral' },
        { type: 'bread', value: 'brioche', description: 'pão de brioche', selectDescription: 'pão de brioche' }, 
    ],
    
    allBurgers: [ 
        { value:'empty', type: 'burger', selectDescription: '*selecione o hamburger' },
        { type: 'burger', value: 'carne90', description: 'hamburguer de carne 90g', selectDescription: '90g de carne', price: 13 },
        { type: 'burger', value: 'carne180', description: 'hamburguer de carne 180g', selectDescription: '180g de carne', price: 17 },
        { type: 'burger', value: 'veg90', description: 'veggie burger 90g', selectDescription: '90g veggie', price: 11 },
        { type: 'burger', value: 'veg180', description: 'veggie burger 180g', selectDescription: '180g veggie', price: 15 },
    ],
    
    allCheeses: [ 
        { value:'empty', type: 'cheese', selectDescription: 'selecione o queijo' },
        { type: 'cheese', value: 'cheddar', description: 'queijo cheddar', selectDescription: 'queijo cheddar' },
        { type: 'cheese', value: 'mussarela', description: 'queijo mussarela', selectDescription: 'queijo mussarela' },
        { type: 'cheese', value: 'prato', description: 'queijo prato', selectDescription: 'queijo prato' },
    ],
    
    allExtras: [
        { type: 'extra', value: 'maionese-verde', description: 'maionese verde', price: 3 },
        { type: 'extra', value: 'bacon', description: 'bacon', price: 4 },
        { type: 'extra', value: 'ovo', description: 'ovo', price: 2 },
        { type: 'extra', value: 'tomate', description: 'tomate', price: .75 },
        { type: 'extra', value: 'alface', description: 'alface', price: .5 },
        { type: 'extra', value: 'barbecue', description: 'barbecue', price: 1.5 },
        { type: 'extra', value: 'molhoCheddar', description: 'cascata de molho cheddar', price: 4 },
    ]
};