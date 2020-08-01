import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	margin: 25px auto 100px;
	padding-bottom: 50px;
	position: relative;
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

export const StyledDivLoadingWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledDivLoading = styled.div`
	position: absolute;
	top: 2.5%;
	left: 5%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 300px;
	width: 90%;
	height: 95%;
	border-radius: 8px;
	cursor: wait;
`
