import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	min-height: 300px;
	width: 95%;
	max-width: 900px;
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
	color: #f4f4f4;
	font-style: italic;

	p {
		text-align: center;
		margin: 16px;
	}

	p span {
		margin-left: 10px;
	}

	p:last-child {
		font-weight: bold;

		span {
			color: #f25252;
			font-size: 1.1rem;
		}
	}
`
