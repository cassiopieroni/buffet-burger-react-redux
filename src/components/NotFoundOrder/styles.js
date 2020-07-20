import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	width: 800px;
	min-height: 300px;
	margin: 25px auto 100px;
`

export const StyledDiv = styled.div`
	box-sizing: border-box;
	padding: 10px;
	margin: 0 auto;
	text-align: center;

	h3 {
		margin: 10px auto;
		text-align: center;
		font-weight: bold;
	}

	p {
		margin: 5px auto;
		font-size: 1.1rem;

		a {
			color: #f2c777;
		}
	}
`
