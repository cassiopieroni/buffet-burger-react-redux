import styled from "styled-components"
import { StyledSections, StyledButtons } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	min-height: 300px;
	margin: 25px auto 100px;
	max-width: 95%;

	@media (min-width: 900px) {
		max-width: 1000px;
	}
`

export const StyledDiv = styled.div`
	margin: 25px auto;
	width: 90%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 600px) {
		flex-direction: row;
		max-width: 600px;

		button {
			width: 45%;
		}
	}
`

export const StyledDivEmpty = styled.div`
	width: 80%;
	margin: 60px auto auto;
	font-size: 1.1rem;
	line-height: 1.5;
	text-align: center;

	a {
		color: var(--contrast-A);
	}
`
