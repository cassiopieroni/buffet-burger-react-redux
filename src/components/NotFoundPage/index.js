import React from "react"
import { StyledSection } from "./styles"
import notFoundIcon from "../../assets/notFound-55x55.png"

const NotFoundPage = () => (
	<StyledSection>
		<h2>404 - Página não encontrada</h2>
		<img src={notFoundIcon} alt="página não encontrada" />
		<p>
			Desculpe, parece que a página solicitada foi removida ou nunca existiu!
			Certifique-se que digitou o endereço corretamente ou seguiu um link válido.
		</p>
	</StyledSection>
)

export default NotFoundPage
