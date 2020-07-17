import styled from "styled-components"

export const StyledButton = styled.button`
	position: relative;
	background-color: #f25252;
	border-radius: 2px;
	margin: 15px auto;
	padding: 10px 20px;
	border: none;
	box-shadow: 3px 3px 5px black;
	box-sizing: border-box;
	font-family: arial;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 5px 5px 5px black;
	}

	&:hover img {
		transform: translateY(-4px);
	}

	img {
		margin: 0 10px;
		transition: all 0.3s ease-in-out;
	}

	p {
		margin: 0 10px;
		font-size: 1.1rem;
		font-weight: bold;
		color: #f1f1f1;
	}
`
