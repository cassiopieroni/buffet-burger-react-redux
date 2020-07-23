import styled from "styled-components"
import { StyledButtons } from "../../styles/sharedStyles"
import burgerImg from "../../assets/img-burger.jpg"

export const StyledDiv = styled.div`
	background: url(${burgerImg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;

	position: absolute;
	top: 0;
	left: 0;
	min-width: 100%;
	min-height: 100%;

	display: flex;
	justify-content: center;

	@media (min-width: 600px) {
		justify-content: flex-start;
	}
	@media (min-width: 900px) {
		justify-content: flex-start;
		align-items: center;
	}
	@media (min-width: 1700px) {
		background-color: var(--background-colorA);
		background-size: auto;
		justify-content: center;
	}
`

export const StyledButton = styled(StyledButtons)`
	background-color: rgba(242, 82, 82, 0.7);
	max-width: 300px;
	height: 70px;
	margin: 30px 0 0 0;

	&:hover {
		background-color: rgba(242, 82, 82, 1);
	}

	p {
		margin: 0 40px 0 20px;
		color: #f4f4f4;
	}

	@media (min-width: 600px) {
		margin: 80px 0 0 80px;
	}
	@media (min-width: 900px) {
		margin: 0 0 0 80px;
	}
	@media (min-width: 1700px) {
		margin: 0 700px 0 0;
	}
`
