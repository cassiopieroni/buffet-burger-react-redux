import styled from "styled-components"

export const StyledUl = styled.ul`
	position: fixed;
	top: 20%;
	right: 5%;
	z-index: 5px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	list-style: none;
	max-width: 90%;

	@media (min-width: 1500px) {
		right: 15%;
		max-width: 50%;
	}
`
