import styled from "styled-components"
import { StyledSectionsBg } from "../SharedStyles"

export const StyledSection = styled(StyledSectionsBg)`
	width: 350px;
	height: max-content;
	margin: 15px 5px;
	padding: 35px 10px;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		height: max-content;
		margin: 0 auto;
	}

	h3 {
		text-align: center;
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 25px;
		width: 100%;
	}

	ul {
		width: 100%;
		margin: 0;
		text-align: start;
		font-size: 1.2rem;
	}

	a {
		margin: 20px auto 10px auto;
		color: #f1f1f1;
		font-size: 1.1rem;
		text-decoration: none;
		border-bottom: 1px solid #f1f1f1;
		box-sizing: border-box;
		padding-bottom: 3px;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: #f2c777;
			border-bottom: 1px solid #f2c777;
		}
	}
`

const StyledP = styled.p`
	width: 100%;
	font-weight: bold;
	margin: 15px 0;
`

export const StyledP1 = styled(StyledP)`
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`

export const StyledP2 = styled(StyledP)`
	font-size: 1.1rem;
	font-style: italic;
	text-align: center;
`
