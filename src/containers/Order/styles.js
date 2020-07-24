import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	margin: 25px auto 100px;
`

export const StyledDivWrapper = styled.div`
	margin: 8px auto;
	padding: 16px 0;

	h3 {
		text-align: center;
		text-transform: uppercase;
	}

	p {
		width: 100%;
		text-align: center;
		margin: 5px auto;
		font-size: 1.1rem;
	}
`

export const StyledDivWrapperBtns = styled.div`
	width: 95%;
	margin: 16px auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	button {
		min-width: 280px;
		max-width: 320px;
	}
`

export const StyledDivWrapperBtnBlue = styled(StyledDivWrapperBtns)`
	button {
		background-color: var(--color-A);
		margin: 8px;
		min-width: 280px;
		max-width: 300px;
		div {
			padding: 0 4px;
			width: 50px;
			height: 50px;
			background-color: rgba(0, 0, 0, 0.5);
		}
		div img {
			width: 40px;
			height: 40px;
		}
		p {
			color: var(--background-colorA);
		}
	}
`

export const StyledDiv = styled.div`
	padding: 10px;
	margin: 0 auto;
`

export const StyledP = styled.p`
	background-color: var(--contrast-A);
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	margin: 16px auto;
	width: max-content;
	padding: 16px;
	text-transform: uppercase;
`
