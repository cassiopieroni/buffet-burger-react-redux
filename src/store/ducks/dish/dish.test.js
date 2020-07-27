import dishReducer, { actions, INITIAL_STATE } from "./index"

describe("dish reducer", () => {
	describe(`Lidando com a action '${actions.TOGGLE_ITEM}'`, () => {
		const itemTypeBurgerValueA = {
			price: 15,
			type: "burger",
			value: "A",
		}

		const itemTypeBurgerValueB = {
			price: 11,
			type: "burger",
			value: "B",
		}

		const itemTypeCheeseValueA = {
			price: 4,
			type: "cheese",
			value: "A",
		}

		const stateWithAnItemTypeBurgerValueB = {
			...INITIAL_STATE,
			selectedItems: {
				...INITIAL_STATE.selectedItems,
				[itemTypeBurgerValueB.type]: itemTypeBurgerValueB,
			},
			summaryItems: [{ ...itemTypeBurgerValueB }],
			subtotal: itemTypeBurgerValueB.subtotal,
		}

		it(`Se 'payload.value' for diferente de 'state.selectedItems[payload.type].value', 
        deve atualizar o estado com 'payload'`, () => {
			const newDishState = dishReducer(stateWithAnItemTypeBurgerValueB, {
				type: actions.TOGGLE_ITEM,
				payload: itemTypeBurgerValueA,
			})

			expect(newDishState.selectedItems).toEqual({
				...stateWithAnItemTypeBurgerValueB.selectedItems,
				[itemTypeBurgerValueA.type]: itemTypeBurgerValueA,
			})
			expect(newDishState.summaryItems).toContain(itemTypeBurgerValueA)
			expect(newDishState.summaryItems).not.toContain(itemTypeBurgerValueB)
			expect(newDishState.subtotal).toBe(itemTypeBurgerValueA.price)
		})

		it(`Se 'payload.value' for igual a 'state.selectedItems[payload.type].value', 
        deve retornar 'state.selectedItems[payload.type].value = ""', retirando este item do estado`, () => {
			const newDishState = dishReducer(stateWithAnItemTypeBurgerValueB, {
				type: actions.TOGGLE_ITEM,
				payload: itemTypeBurgerValueB,
			})

			expect(newDishState.selectedItems[itemTypeBurgerValueB.type].value).toBe("")
			expect(newDishState.summaryItems).not.toContain(itemTypeBurgerValueB)
			expect(newDishState.subtotal).toBe(0)
		})

		it(`Quando o estado já possuir valores e, se 'payload.type' for diferente desses valores presentes,
        deve atualizar o estado acrescentando 'playload' `, () => {
			const newDishState = dishReducer(stateWithAnItemTypeBurgerValueB, {
				type: actions.TOGGLE_ITEM,
				payload: itemTypeCheeseValueA,
			})

			expect(newDishState.selectedItems).toEqual({
				...stateWithAnItemTypeBurgerValueB.selectedItems,
				[itemTypeCheeseValueA.type]: itemTypeCheeseValueA,
			})
			expect(newDishState.summaryItems).toContain(itemTypeBurgerValueB)
			expect(newDishState.summaryItems).toContain(itemTypeCheeseValueA)
		})
	})

	describe(`lidando com a action ${actions.TOGGLE_EXTRA_ITEM}`, () => {
		const extraItem = {
			price: 3,
			type: "extra",
			value: "maionese-verde",
		}

		it(`Se o novo item extra selecionado (payload) não estiver presente em 'state.selectedItems.extras', 
        deve atualizar o estado com o novo item extra selecionado (payload)`, () => {
			const newDishState = dishReducer(undefined, {
				type: actions.TOGGLE_EXTRA_ITEM,
				payload: extraItem,
			})

			expect(newDishState.selectedItems.extras).toContain(extraItem)
			expect(newDishState.summaryItems).toContain(extraItem)
			expect(newDishState.subtotal).toBe(extraItem.price)
		})

		it(`Se o novo item extra selecionado (payload) estiver presente em 'state.selectedItems.extras', 
        deve atualizar o estado sem o novo item (payload)`, () => {
			const stateWithExtraItem = {
				...INITIAL_STATE,
				selectedItems: {
					...INITIAL_STATE.selectedItems,
					extras: [extraItem],
				},
				summaryItems: [extraItem],
				subtoal: extraItem.price,
			}

			const newDishState = dishReducer(stateWithExtraItem, {
				type: actions.TOGGLE_EXTRA_ITEM,
				payload: extraItem,
			})

			expect(newDishState.selectedItems.extras).not.toContain(extraItem)
			expect(newDishState.summaryItems).not.toContain(extraItem)
			expect(newDishState.subtotal).toBe(0)
		})
	})
})
