import styled from "styled-components"

export const StyledFooter = styled.footer`
	background-color: var(--background-colorA);
	min-height: 10vh;
	height: 80px;
	width: 100%;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	font-weight: bold;
	address {
		margin-bottom: 10px;
	}

	a,
	p {
		color: var(--text-color);
	}
`
