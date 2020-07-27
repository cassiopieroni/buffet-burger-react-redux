import shoppingBagReducer, { actions } from "./index"
import { increase, decrease } from "./constants"

describe("shopping-bag reducer", () => {
	const dishItemsModel = [
		{
			overviewDescription: "Hamburguer ao ponto",
		},
		{
			overviewDescription: "pão integral",
		},
		{
			overviewDescription: "90g de hamburguer de carne",
		},
		{
			description: "maionese verde",
		},
	]

	const dishPriceModel = 16

	const productModel = {
		description: dishItemsModel
			.map(item => item.overviewDescription || item.description)
			.join(", "),
		unitPrice: dishPriceModel,
		quantity: 1,
		subtotal: dishPriceModel,
		id: 1010,
	}

	describe(`Teste da action '${actions.ADD_PRODUCT_TO_BAG}'`, () => {
		it(`Deve receber 'dishItems' e 'dishPrice' como payload, criar um produto e adicioná-lo na sacola de compras, 
        atualizando a sacola de compras com os novos valores`, () => {
			const newShoppingBagState = shoppingBagReducer(undefined, {
				type: actions.ADD_PRODUCT_TO_BAG,
				payload: { dishItems: dishItemsModel, dishPrice: dishPriceModel },
			})

			const productToCompare = {
				...productModel,
				id: newShoppingBagState.products[0].id,
			}

			expect(newShoppingBagState.products).toContainEqual(productToCompare)
			expect(newShoppingBagState.bagPrice).toBe(productToCompare.subtotal)
		})
	})

	describe(`Teste da action '${actions.CHANGE_QUANTITY}'`, () => {
		it("Deve aumentar a quantidade de um produto na sacola de compras", () => {
			const newShoppingBagState = shoppingBagReducer(
				{
					products: [productModel],
					bagPrice: productModel.subtotal,
				},
				{
					type: actions.CHANGE_QUANTITY,
					payload: { product: productModel, changeType: increase },
				}
			)

			expect(newShoppingBagState.products).toContainEqual({
				...productModel,
				quantity: 2,
				subtotal: productModel.unitPrice * 2,
			})
			expect(newShoppingBagState.bagPrice).toBe(productModel.subtotal * 2)
		})

		it("Deve diminuir a quantidade de um produto na sacola de compras", () => {
			const tripleProduct = {
				...productModel,
				quantity: 3,
				subtotal: productModel.dishPrice * 3,
			}

			const newShoppingBagState = shoppingBagReducer(
				{
					products: [tripleProduct],
					bagPrice: tripleProduct.subtotal,
				},
				{
					type: actions.CHANGE_QUANTITY,
					payload: { product: tripleProduct, changeType: decrease },
				}
			)

			expect(newShoppingBagState.products).toContainEqual({
				...tripleProduct,
				quantity: tripleProduct.quantity - 1,
				subtotal: tripleProduct.subtotal - tripleProduct.unitPrice,
			})
			expect(newShoppingBagState.bagPrice).toBe(
				tripleProduct.subtotal - tripleProduct.unitPrice
			)
		})
	})

	describe(`Teste da action '${actions.REMOVE_PRODUCT_FROM_BAG}'`, () => {
		it("Deve remover um produto da sacola de compras", () => {
			const newShoppingBagState = shoppingBagReducer(
				{
					products: [productModel],
					bagPrice: productModel.unitPrice,
				},
				{
					type: actions.REMOVE_PRODUCT_FROM_BAG,
					payload: productModel,
				}
			)

			expect(newShoppingBagState.products).toHaveLength(0)
			expect(newShoppingBagState.bagPrice).toBe(0)
		})
	})

	describe(`Teste da action '${actions.CONFIRM_PRODUCTS}'`, () => {
		it("Deve confirmar a sacola de compras", () => {
			const newShoppingBagState = shoppingBagReducer(
				{
					products: [productModel],
					bagPrice: productModel.unitPrice,
					isConfirmedBag: false,
				},
				{
					type: actions.CONFIRM_PRODUCTS,
				}
			)

			expect(newShoppingBagState.isConfirmedBag).toBe(true)
		})
	})

	describe(`Teste da action '${actions.CLEAR_SHOPPING_BAG}'`, () => {
		it("Deve retornar o estado inicial", () => {
			const newShoppingBagState = shoppingBagReducer(
				{
					products: [productModel],
					bagPrice: productModel.unitPrice,
				},
				{
					type: actions.CLEAR_SHOPPING_BAG,
				}
			)

			expect(newShoppingBagState).toEqual({
				products: [],
				bagPrice: 0,
				isConfirmedBag: false,
			})
		})
	})
})
