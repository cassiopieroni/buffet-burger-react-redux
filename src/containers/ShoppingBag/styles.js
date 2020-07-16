import styled from "styled-components"
import { StyledSections, StyledButtons } from "../../components/SharedStyles"

export const StyledSection = styled(StyledSections)`
	width: 800px;
	min-height: 300px;
	margin: 25px auto 100px;
`

export const StyledDiv = styled.div`
	margin: 25px auto;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-around;

	a {
		text-decoration: none;
	}
`

export const StyledButton = styled(StyledButtons)`
	@media (max-width: 830px) {
		padding: 15px;
		img {
			display: none;
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
		color: #f2c777;
	}
`
