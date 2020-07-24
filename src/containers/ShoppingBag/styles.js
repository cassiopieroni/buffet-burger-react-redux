import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	margin: 25px auto 100px;

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
