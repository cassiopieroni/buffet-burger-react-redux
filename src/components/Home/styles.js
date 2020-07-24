import styled from "styled-components"
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

	button {
		max-width: 300px;
		margin: 30px 0 0 0;
		height: 60px;
	}

	@media (min-width: 600px) {
		justify-content: flex-start;
		button {
			margin: 80px 0 0 80px;
		}
	}
	@media (min-width: 900px) {
		justify-content: flex-start;
		align-items: center;
		button {
			margin: 0 0 0 80px;
		}
	}
	@media (min-width: 1700px) {
		background-color: var(--background-colorA);
		background-size: auto;
		justify-content: center;
		button {
			margin: 0 700px 0 0;
		}
	}
`
