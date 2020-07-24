import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	margin: 25px auto 100px;
	padding-bottom: 50px;
`

export const StyledForm = styled.form`
	width: 95%;
	margin: 25px auto;

	button {
		margin: 24px auto;
		width: 90%;
		max-width: 350px;
	}
`

export const StyledDiv = styled.div`
	margin: 20px auto;
	color: var(--text-color);
	font-style: italic;

	p {
		text-align: center;
		margin: 16px;
	}

	p span {
		margin-left: 10px;
	}
`
