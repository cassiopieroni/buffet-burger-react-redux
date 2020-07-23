import styled from "styled-components"
import { StyledSectionsBg } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSectionsBg)`
	min-width: 340px;
	max-width: 100%;
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
		text-transform: uppercase;
		text-align: center;
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 25px;
		width: 100%;
		color: var(--text-color);
	}

	ul {
		width: 100%;
		text-align: start;
		font-size: 1.2rem;
	}

	div button {
		width: 90%;
	}

	a {
		margin: 20px auto 10px auto;
		color: var(--text-color);
		font-size: 1.1rem;
		text-decoration: none;
		border-bottom: 1px solid #f1f1f1;
		padding-bottom: 3px;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: var(--contrast-A);
			border-bottom: 1px solid var(--contrast-A);
		}
	}

	@media (min-width: 600px) {
		width: 400px;
		div {
			width: 80%;
		}
	}

	@media (min-width: 900px) {
		width: 30%;
		max-width: 400px;
		margin-left: 16px;
		div {
			width: 90%;
		}
	}
`

const StyledP = styled.p`
	width: 100%;
	margin: 15px 0;
`

export const StyledP1 = styled(StyledP)`
	font-weight: bold;
	font-size: 1.4rem;
	text-align: center;
`

export const StyledP2 = styled(StyledP)`
	font-size: 1.1rem;
	font-style: italic;
	text-align: center;
`
