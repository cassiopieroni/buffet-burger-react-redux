import styled from "styled-components"

export const StyledButton = styled.button`
	position: relative;
	background-color: var(--contrast-A);
	border-radius: 8px;
	margin: 15px auto;
	width: 100%;
	border: none;
	box-shadow: 3px 3px 5px black;
	box-sizing: border-box;
	font-family: arial;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 5px 5px 5px black;
	}

	&:active {
		transform: translateY(2px);
		box-shadow: inset 0 0 8px black;
	}

	div {
		width: 60px;
		height: 60px;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 8px 0 0 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div img {
		transition: all 0.3s ease-in-out;
		background-color: transparent;
	}

	p {
		padding: 0 5px;
		font-size: 1.1rem;
		font-weight: bold;
		color: var(--text-color);
		text-align: center;
		margin: 0 auto;
		max-width: 70%;
	}
`
