import React, { useEffect } from "react"
import { StyledLi } from "./styles"
import successIcon from "../../assets/success-30x30.png"
import errorIcon from "../../assets/error-30x30.png"

const Message = ({ message, removeMessage }) => {
	useEffect(() => {
		setTimeout(() => removeMessage(message), msgDelay)
	}, [removeMessage, message])

	const isError = message.type === "error"
	const msgDelay = 3000

	return (
		<StyledLi isError={isError} delay={msgDelay / 1000 + 0.1} data-testid="message">
			<div>
				<img
					src={isError ? `${errorIcon}` : `${successIcon}`}
					alt={isError ? "erro" : "sucesso"}
				/>
			</div>
			<p> {message.content} </p>
		</StyledLi>
	)
}

export default Message
