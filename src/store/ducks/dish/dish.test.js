import dishReducer, { actions, INITIAL_STATE } from "./index"

describe("dish reducer", () => {
	describe(`Lidando com a action '${actions.TOGGLE_ITEM}'`, () => {
		const itemA = {
			price: 15,
			type: "burger",
			value: "AAA",
		}

		const itemB = {
			price: 11,
			type: "burger",
			value: "BBB",
		}

		const itemC = {
			price: 4,
			type: "cheese",
			value: "AAA",
		}

		const stateWithItemB = {
			...INITIAL_STATE,
			selectedItems: {
				...INITIAL_STATE.selectedItems,
				[itemB.type]: itemB,
			},
			summaryItems: [{ ...itemB }],
			subtotal: itemB.subtotal,
		}

		it(`Se 'payload.value' for diferente de 'state.selectedItems[payload.type].value', 
        deve atualizar o estado com 'payload'`, () => {
			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemA,
				}).selectedItems[itemA.type].value
			).toBe(itemA.value)

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemA,
				}).summaryItems
			).toContain(itemA)

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemA,
				}).subtotal
			).toBe(itemA.price)
		})

		it(`Se 'payload.value' for igual a 'state.selectedItems[payload.type].value', 
        deve retornar 'state.selectedItems[payload.type].value = ""', retirando este item do estado`, () => {
			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemB,
				}).selectedItems[itemB.type].value
			).toBe("")

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemB,
				}).summaryItems
			).not.toContain(itemB)

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemB,
				}).subtotal
			).toBe(0)
		})

		it(`Quando o estado já possuir valores e, se 'payload.type' for diferente desses valores presentes,
        deve atualizar o estado acrescentando 'playload' `, () => {
			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemC,
				}).selectedItems[itemC.type].value
			).toBe("AAA")

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemC,
				}).summaryItems
			).toContain(itemB)

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemC,
				}).summaryItems
			).toContain(itemB)

			expect(
				dishReducer(stateWithItemB, {
					type: actions.TOGGLE_ITEM,
					payload: itemC,
				}).subtotal
			).toBe(15)
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
			expect(
				dishReducer(undefined, {
					type: actions.TOGGLE_EXTRA_ITEM,
					payload: extraItem,
				}).selectedItems.extras
			).toContain(extraItem)

			expect(
				dishReducer(undefined, {
					type: actions.TOGGLE_EXTRA_ITEM,
					payload: extraItem,
				}).summaryItems
			).toContain(extraItem)

			expect(
				dishReducer(undefined, {
					type: actions.TOGGLE_EXTRA_ITEM,
					payload: extraItem,
				}).subtotal
			).toBe(extraItem.price)
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

			expect(
				dishReducer(stateWithExtraItem, {
					type: actions.TOGGLE_EXTRA_ITEM,
					payload: extraItem,
				}).selectedItems.extras
			).not.toContain(extraItem)

			expect(
				dishReducer(stateWithExtraItem, {
					type: actions.TOGGLE_EXTRA_ITEM,
					payload: extraItem,
				}).summaryItems
			).not.toContain(extraItem)

			expect(
				dishReducer(stateWithExtraItem, {
					type: actions.TOGGLE_EXTRA_ITEM,
					payload: extraItem,
				}).subtotal
			).toBe(0)
		})
	})
})
