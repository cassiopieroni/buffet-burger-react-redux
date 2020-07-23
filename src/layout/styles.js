import styled from "styled-components"
import burgerIcon from "../assets/opacity-26x26.png"

export const StyledDiv = styled.div`
	margin: 0 auto;
	min-height: 100vh;
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	position: relative;
	background-color: var(--background-colorB);
	background: url(${burgerIcon});
	background-repeat: space;

	display: flex;
	flex-direction: column;

	main {
		margin: 0 auto;
		position: relative;
		width: 100%;
		min-height: 80vh;
	}
`
