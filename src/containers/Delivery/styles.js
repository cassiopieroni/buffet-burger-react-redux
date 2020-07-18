import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	width: 800px;
	min-height: 300px;
	margin: 25px auto 100px;
	padding-bottom: 50px;
`

export const StyledForm = styled.form`
	width: 95%;
	margin: 25px auto;

	input {
		border: 1px solid #f1f1f1;
		border-radius: 3px;
		height: 35px;
		box-sizing: border-box;
		padding: 3px 10px;
		margin: 5px 10px;
		font-weight: bold;
		text-transform: uppercase;
		background-color: #012840;
		color: #ffffff;

		&::placeholder {
			color: lightgray;
			text-transform: lowercase;
		}
	}
`

export const StyledDiv = styled.div`
	margin: 20px auto;
	color: #f4f4f4;
	font-style: italic;

	p {
		text-align: center;
		margin: 10px;
	}

	span {
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
