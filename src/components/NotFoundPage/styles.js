import styled from "styled-components"
import { StyledSections } from "../../styles/sharedStyles"

export const StyledSection = styled(StyledSections)`
	width: 580px;
	margin: 50px auto;
	text-align: center;

	img {
		margin: 10px auto 50px;
	}

	p {
		width: 80%;
		margin: 0 auto;
		/* text-align: justify; */
		line-height: 1.6;
		font-size: 1.1rem;

		&::first-letter {
			padding-left: 15px;
		}
	}
`
