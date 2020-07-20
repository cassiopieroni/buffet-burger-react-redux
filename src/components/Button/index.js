import React from "react"
import { StyledButton } from "./styles"

import burgerIcon from "../../assets/burger-45x45-white.png"
import confirmedBurgerIcon from "../../assets/confirmedBurger-45x45.png"
import confirmIcon from "../../assets/confirm-45x45.png"
import bagIcon from "../../assets/bag-50x50.png"
import locationIcon from "../../assets/location-45x45.png"

const Button = ({ clicked, iconType, children, buttonType }) => {
	let icon

	switch (iconType) {
		case "burger":
			icon = burgerIcon
			break
		case "confirmedBurger":
			icon = confirmedBurgerIcon
			break
		case "confirm":
			icon = confirmIcon
			break
		case "shoppingBag":
			icon = bagIcon
			break
		case "location":
			icon = locationIcon
			break
		default:
			icon = null
	}

	return (
		<StyledButton onClick={clicked || null} type={buttonType || "button"}>
			{icon && <img src={icon} alt={iconType} />}
			<p>{children}</p>
		</StyledButton>
	)
}

export default Button
