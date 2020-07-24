import React from "react"

import {
	StyledDiv,
	StyledLabelXL,
	StyledLabelL,
	StyledLabelM,
	StyledLabelS,
} from "./styles"

const DeliveryForm = ({ fetchingAddress, changeAddress, addressForm }) => {
	const {
		clientName,
		cep,
		logradouro,
		num,
		complemento,
		bairro,
		localidade,
		uf,
	} = addressForm

	return (
		<StyledDiv>
			<StyledLabelXL>
				Nome:
				<input
					type="text"
					name="clientName"
					placeholder="ex.: SEU NOME"
					required
					value={clientName}
					onChange={changeAddress}
				/>
			</StyledLabelXL>

			<StyledLabelXL>
				Cep:
				<input
					type="text"
					name="cep"
					placeholder="ex.: 00000-000"
					maxLength={9}
					required
					value={cep}
					onBlur={fetchingAddress}
					onChange={changeAddress}
				/>
			</StyledLabelXL>

			<StyledLabelL>
				Rua:
				<input
					placeholder="ex.: Rua Brás Cubas"
					name="logradouro"
					type="text"
					id="rua"
					required
					value={logradouro}
					onChange={changeAddress}
				/>
			</StyledLabelL>

			<StyledLabelS>
				Número:
				<input
					placeholder="ex.: 123"
					name="num"
					type="text"
					id="rua"
					required
					value={num}
					onChange={changeAddress}
				/>
			</StyledLabelS>

			<StyledLabelL>
				Complemento (opcional):
				<input
					placeholder="ex.: fundos"
					name="complemento"
					type="text"
					id="rua"
					value={complemento}
					onChange={changeAddress}
				/>
			</StyledLabelL>

			<StyledLabelS>
				UF:
				<input
					placeholder="ex.: SC"
					name="uf"
					type="text"
					id="uf"
					maxLength={2}
					minLength={2}
					required
					value={uf}
					onChange={changeAddress}
				/>
			</StyledLabelS>

			<StyledLabelM>
				Cidade:
				<input
					placeholder="ex.: Florianópolis"
					name="localidade"
					type="text"
					id="cidade"
					required
					value={localidade}
					onChange={changeAddress}
				/>
			</StyledLabelM>

			<StyledLabelM>
				Bairro:
				<input
					placeholder="ex.: Lagoa da Conceição"
					name="bairro"
					type="text"
					id="bairro"
					required
					value={bairro}
					onChange={changeAddress}
				/>
			</StyledLabelM>
		</StyledDiv>
	)
}

export default DeliveryForm
