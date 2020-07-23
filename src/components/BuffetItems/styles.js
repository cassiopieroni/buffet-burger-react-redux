import styled from "styled-components"
import { StyledSectionsBg } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSectionsBg)`
	min-width: 330px;
	max-width: 100%;
	margin: 15px 0;
	padding: 24px 8px;

	h2 {
		text-align: center;
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	@media (min-width: 600px) {
		width: 90%;
		max-width: 600px;
		padding: 24px 16px;
	}

	@media (min-width: 900px) {
		width: 60%;
		max-width: 700px;
		margin-right: 16px;
	}

	@media (min-width: 1500px) {
		max-width: 800px;
		margin-right: 16px;
		padding: 24px 32px;
	}
`
