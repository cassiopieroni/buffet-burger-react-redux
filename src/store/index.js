import { configureStore } from "@reduxjs/toolkit"

import shoppingBag from "./ducks/shoppingBag"
import messages from "./ducks/messages"
import dish from "./ducks/dish"
import delivery from "./ducks/delivery"
import orders from "./ducks/orders"
import initialData from "./ducks/initialData"

export default configureStore({
	reducer: {
		dish,
		shoppingBag,
		delivery,
		orders,
		messages,
		initialData,
	},
})
