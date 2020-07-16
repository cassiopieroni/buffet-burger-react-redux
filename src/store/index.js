import { configureStore } from "@reduxjs/toolkit"

import shoppingBag from "./ducks/shoppingBag"
import messages from "./ducks/messages"
import buffet from "./ducks/buffet"
import delivery from "./ducks/delivery"
import confirmedOrders from "./ducks/confirmedOrders"

export default configureStore({
	reducer: {
		buffet,
		shoppingBag,
		delivery,
		confirmedOrders,
		messages,
	},
})
